# AGENTS.md — [PENDIENTE: nombre del proyecto]

Punto de entrada para agentes que trabajen en este repositorio. Un campo sin
completar es información faltante, no un hecho; marcar `[NO APLICA]` cuando
corresponda. Para completar este contrato, aplicar
`.agentic/skills/completar-contrato.md`.

## Reglas siempre vigentes

Leer y aplicar `.agentic/golden-rules.md` antes de planificar o cambiar código,
tanto en tareas directas como orquestadas.

## Uso de skills

- Para cambios de comportamiento ejecutable, aplicar `.agentic/skills/tdd.md`,
  tanto en tareas directas como delegadas.
- Al revisar cambios contra estándares y requisitos, aplicar
  `.agentic/skills/code-review.md`.
- Para recuperar contexto de sesiones anteriores o guardar decisiones y
  hallazgos duraderos, aplicar `.agentic/skills/usar-engram.md`.
- Antes de localizar o comprender código, aplicar
  `.agentic/skills/usar-codegraph.md`: consultar el índice si está disponible;
  en caso contrario, usar búsqueda y lectura directa.

## Proyecto

- Propósito: `[PENDIENTE]`
- Arquitectura: `[PENDIENTE]`
- Entrypoints: `[PENDIENTE]`

## Validación

- Focalizada: `[PENDIENTE: comando para comprobar solo lo modificado]`
- Completa: `[PENDIENTE: comando para la suite completa]`

## Tests

- Framework y ubicación: `[PENDIENTE]`

### Ciclo de vida de los tests

- **Permanentes:** agregar pruebas o conservar las creadas durante una tarea
  solo por pedido explícito del usuario. Si protegen un flujo crítico,
  recomendar conservarlas y esperar su decisión.
- **Temporales:** permitidas durante el desarrollo, incluido TDD. Identificarlas
  como temporales en sus nombres o archivos; eliminarlas antes de cerrar la
  tarea salvo pedido explícito de conservarlas. En ese caso, retirar la marca
  temporal.
- **Existentes:** se pueden ejecutar y se conservan salvo retirada autorizada.
  La limpieza afecta únicamente a los temporales creados para la tarea.
- Una prueba temporal que se vio fallar por el comportamiento bajo prueba y
  luego pasar aporta evidencia de validación. Que el cambio no deje tests
  permanentes no incumple por sí solo la regla 3.5 de `.agentic/golden-rules.md`.

## Git

- Rama por defecto: `[PENDIENTE]`
- Antes de editar, comprobar la rama y registrar `git status`; revisar el diff
  existente y preservar los cambios ajenos.
- No hacer commit, push ni abrir PR salvo pedido explícito del usuario.
- Mensajes de commit: breves, en inglés y siguiendo Conventional Commits
  (`<tipo>: <resumen>`, con alcance opcional: `<tipo>(<alcance>): <resumen>`).
  Usar tipos como `chore`, `feat`, `fix`, `refactor`, `docs`, `test`, etc.
  Mantener este estándar salvo pedido explícito del usuario en contrario.
- Crear, cambiar o borrar ramas, reescribir historial y descartar cambios
  requiere autorización explícita y específica. Esto incluye `git clean`,
  `git reset --hard`, checkout/restore destructivo y force-push. La rama por
  defecto no autoriza cambiarse a ella automáticamente.

## Seguridad

- No leer ni mostrar secretos (`.env`, tokens, claves). El código sí puede
  cargarlos en runtime mediante variables de entorno.
- Rutas protegidas: `[PENDIENTE]`
- No instalar herramientas, publicar paquetes ni acceder a remotos sin
  autorización explícita.
- **Aislamiento:** no tocar, reiniciar, reconstruir, migrar, detener ni leer
  secretos de otros proyectos sin aprobación explícita y específica. La
  autorización para este repo no se extiende a servicios, datos o recursos ajenos.

## Orquestación

Para una tarea **ya especificada** —un archivo, un issue, o la conclusión de una
sesión previa de entendimiento— aplicar `.agentic/skills/orquestar.md`. Una tarea
ambigua se aclara antes de orquestar. Una tarea simple se resuelve directo, sin
orquestación.

Roles disponibles en `.agentic/agents/`: investigador, implementador, revisor.

## Referencias

| Información | Dónde vive |
| --- | --- |
| Documentación del proyecto | `[PENDIENTE]` |
| Cómo hacer crecer la capa agéntica | `.agentic/README.md` |
