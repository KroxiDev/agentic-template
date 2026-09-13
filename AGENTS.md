# AGENTS.md — agentic-template

Este repo **es** la plantilla. No lo trates como un proyecto adoptante.

- El payload que se instala en otros proyectos vive en `template/`. Editar ahí.
- `bin/agentic-template.mjs` es el único código; Node 20+, sin dependencias.
- `template/AGENTS.md` y `template/CLAUDE.md` son plantillas, no las instrucciones
  de este repositorio. Sus `[PENDIENTE]` son intencionales: no completarlos.
- Probar cambios con `node bin/agentic-template.mjs init <dir-temporal> --dry-run`.
- No hacer commit, push ni PR salvo pedido explícito.
