#!/usr/bin/env node
// Integra la capa agéntica en un proyecto. Una sola dirección: no hay update,
// doctor ni uninstall. Una vez integrada, la capa pertenece al proyecto.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PAYLOAD = resolve(HERE, '..', 'template');

const START = '<!-- AGENTIC_TEMPLATE_START -->';
const END = '<!-- AGENTIC_TEMPLATE_END -->';

// AGENTS.md y CLAUDE.md pueden preexistir: se les agrega un bloque delimitado
// en lugar de reemplazarlos.
const MERGE = new Set(['AGENTS.md', 'CLAUDE.md']);

// El .gitignore del run dir se genera acá y no viaja en template/, porque npm
// renombra los .gitignore al empaquetar.
const RUN_GITIGNORE = '.agentic/run/.gitignore';
const RUN_GITIGNORE_BODY = '*\n!.gitignore\n';

function fail(msg, detail = []) {
  console.error(`\nagentic-template: ${msg}`);
  for (const line of detail) console.error(`  ${line}`);
  console.error('');
  process.exit(1);
}

async function walk(dir, base = dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, base)));
    else out.push(relative(base, full).split(sep).join("/"));
  }
  return out.sort();
}

const argv = process.argv.slice(2);
if (argv[0] !== 'init') {
  fail('uso: agentic-template init [directorio] [--dry-run]');
}

const dryRun = argv.includes('--dry-run');
const target = resolve(argv.slice(1).find((a) => !a.startsWith('--')) ?? '.');

if (!existsSync(PAYLOAD)) fail(`no encuentro el payload en ${PAYLOAD}`);
if (!existsSync(target)) fail(`el directorio ${target} no existe`);

const plan = [];
const collisions = [];

for (const rel of await walk(PAYLOAD)) {
  const body = await readFile(join(PAYLOAD, rel), 'utf8');
  const dest = join(target, rel);

  // Los archivos fusionables se escriben siempre delimitados: así un init
  // repetido los reconoce, y el bloque se puede retirar de una pieza.
  const block =
    MERGE.has(rel) && !body.includes(START)
      ? `${START}\n${body.trim()}\n${END}\n`
      : body;

  if (!existsSync(dest)) {
    plan.push({ rel, action: 'crear', body: block });
    continue;
  }
  const current = await readFile(dest, 'utf8');

  if (!MERGE.has(rel)) {
    // Idéntico: init ya corrió acá. Distinto: el proyecto lo editó, y ese
    // trabajo pesa más que la plantilla.
    if (current === block) plan.push({ rel, action: 'ya integrado', body: null });
    else collisions.push(rel);
    continue;
  }

  if (current.includes(START)) {
    plan.push({ rel, action: 'ya integrado', body: null });
    continue;
  }
  plan.push({ rel, action: 'agregar bloque', body: `${current.trimEnd()}\n\n${block}` });
}

if (!existsSync(join(target, RUN_GITIGNORE))) {
  plan.push({ rel: RUN_GITIGNORE, action: 'crear', body: RUN_GITIGNORE_BODY });
}

if (collisions.length) {
  fail('estos archivos ya existen y no se sobrescriben:', [
    ...collisions,
    '',
    'Movelos o borralos, y volvé a ejecutar init.',
  ]);
}

const writes = plan.filter((p) => p.body !== null);

if (dryRun) {
  console.log(`\nPlan para ${target}:\n`);
  for (const p of plan) console.log(`  ${p.action.padEnd(16)} ${p.rel}`);
  console.log('\nNada fue escrito (--dry-run).\n');
  process.exit(0);
}

for (const p of writes) {
  const dest = join(target, p.rel);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, p.body, 'utf8');
}

console.log(`\nCapa agéntica integrada en ${target}\n`);
for (const p of plan) console.log(`  ${p.action.padEnd(16)} ${p.rel}`);

const merged = plan.filter((p) => p.action === 'agregar bloque').map((p) => p.rel);
if (merged.length) {
  console.log(
    `\nEstos archivos ya existían y el bloque quedó al final: ${merged.join(', ')}.` +
      '\nRevisalos y fusioná las secciones a mano; init no toca lo que ya estaba.'
  );
}

// Solo AGENTS.md: es el único archivo con hechos del proyecto. Los demás
// mencionan [PENDIENTE] como concepto, no como campo a completar.
const contract = writes.find((p) => p.rel === 'AGENTS.md');
const pending = [];
contract?.body.split('\n').forEach((line, i) => {
  if (line.includes('[PENDIENTE')) pending.push(`AGENTS.md:${i + 1}`);
});

if (pending.length) {
  console.log(`\n${pending.length} campos [PENDIENTE] en AGENTS.md:\n`);
  for (const ref of pending) console.log(`  ${ref}`);
  console.log('\nPara completarlos, con el proyecto abierto:\n');
  console.log('  Claude   ->  /completar-contrato');
  console.log('  Codex    ->  Leé .agentic/skills/completar-contrato.md y aplicalo');
  console.log(
    '\nRecorre el repo, propone lo que puede inferir con su evidencia, y pregunta\n' +
      'solo lo que no. Lo que no se confirma queda [PENDIENTE].\n'
  );
} else {
  console.log('');
}
