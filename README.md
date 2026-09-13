# agentic-template

Capa agéntica mínima para integrar a un proyecto. Compatible con **Claude Code** y
**Codex**, con subagentes reales en las dos.

El contenido vive una sola vez en `.agentic/`. Los archivos bajo `.claude/` y
`.codex/` son adaptadores de 3 a 6 líneas que apuntan ahí.

## Integrar

```bash
npx --yes github:KroxiDev/agentic-template init .
```

`--dry-run` muestra el plan sin escribir nada.

**Una sola dirección.** No hay `update`, `doctor` ni `uninstall`. Una vez
integrada, la capa pertenece al proyecto: modificarla, hacerla crecer o borrarla
es decisión suya. Para retirarla: borrar `.agentic/`, `.claude/`, `.codex/` y el
bloque `AGENTIC_TEMPLATE` de `AGENTS.md` y `CLAUDE.md`.

`init` nunca sobrescribe. Si `AGENTS.md` o `CLAUDE.md` ya existen, agrega un
bloque delimitado al final. Si cualquier otro archivo existe con contenido
distinto, aborta y te dice cuál.

## Qué instala

```text
AGENTS.md                          # contrato del proyecto — lo lee Codex
CLAUDE.md                          # @AGENTS.md + @.agentic/golden-rules.md
.agentic/
  golden-rules.md                  # K.E.Y. / C.L.E.A.N. / F.I.R.S.T.
  README.md                        # mapa de integración y crecimiento
  skills/orquestar.md              # el procedimiento     ← fuente única
  skills/completar-contrato.md     # llenar los pendientes ← fuente única
  agents/investigador.md           # persona              ← fuente única
  agents/implementador.md          # persona              ← fuente única
  agents/revisor.md                # persona              ← fuente única
  run/.gitignore                   # workspace efímero, fuera de git
.claude/
  skills/orquestar/SKILL.md        # adaptador
  commands/completar-contrato.md   # adaptador
  agents/{investigador,implementador,revisor}.md
.codex/
  agents/{investigador,implementador,revisor}.toml
```

18 archivos. Ocho son adaptadores.

## Completar el contrato

`AGENTS.md` llega con 10 campos `[PENDIENTE]`. `init` termina imprimiendo cómo
llenarlos:

```text
  Claude   ->  /completar-contrato
  Codex    ->  Leé .agentic/skills/completar-contrato.md y aplicalo
```

Los campos no son todos iguales. Siete son inferibles del repo —nombre,
arquitectura, entrypoints, comandos de validación, tests, rama—; tres solo los
sabe el usuario: el propósito, las rutas protegidas y dónde vive la documentación
autoritativa.

Así que el procedimiento propone los primeros **con su evidencia** (`archivo:línea`
o el comando que la produjo) y pregunta los segundos, en una sola tanda. Lo que no
se confirma queda `[PENDIENTE]`: un hueco declarado se ve, un valor inventado no.

Sirve de nuevo cada vez que agregues un campo al contrato.

## Compatibilidad

| | Claude Code | Codex |
| --- | --- | --- |
| Contrato | `CLAUDE.md` con `@AGENTS.md` | `AGENTS.md` directo |
| Reglas siempre vigentes | import, en contexto al arrancar | línea imperativa en `AGENTS.md` |
| Subagentes | `.claude/agents/*.md` | `.codex/agents/*.toml` |
| Skills | `.claude/skills/<n>/SKILL.md` | `.agentic/skills/` vía `AGENTS.md` |
| MCP | `.mcp.json` | `.codex/config.toml` |

Claude Code no lee `AGENTS.md`; por eso `CLAUDE.md` lo importa. Sin ese puente, el
contrato no llega a Claude.

## Los roles

| Rol | Momento | Entrada | Salida |
| --- | --- | --- | --- |
| **Investigador** | antes de decidir | una pregunta cerrada | respuesta con fuentes |
| **Implementador** | durante | un brief completo | cambios + validación ejecutada |
| **Revisor** | después | diff + criterios | veredicto por criterio |

El **orquestador** es la sesión principal, no un subagente.

Un rol se gana el lugar solo si aísla contexto o necesita otros permisos. Por eso
investigador y revisor son de solo lectura: leen mucho y devuelven poco, y esas
lecturas nunca entran en la sesión que coordina.

Sobre el implementador: en trabajo interactivo conviene implementar en la sesión
principal, porque corregir cuesta un turno en vez de un brief nuevo. Delegarlo
paga cuando la tarea ya está especificada y no vas a estar mirando.

## Orquestación

Solo para tareas **ya especificadas**: un archivo, un issue, o la conclusión de
una sesión previa de entendimiento. Una tarea ambigua se aclara antes; una simple
se resuelve directo.

El estado vive en `.agentic/run/<id>/plan.md` mientras dura, y se borra al cerrar.
Se ignora solo, así que no hace falta tocar el `.gitignore` del proyecto. Sin
kernel, sin schemas, sin protocolo: un markdown que el orquestador escribe y relee.

`plan.md` registra intención, nunca evidencia. Un paso marcado como hecho no
demuestra que se hizo.

## Hacer crecer la capa

Por defecto es chica. `.agentic/README.md` documenta dónde va cada cosa —una tool,
un MCP, una skill, una regla por path— y qué agregar según el proyecto lo pida.

## Desarrollo

El payload está en `template/`. `bin/agentic-template.mjs` lo copia; no tiene
dependencias.
