# AGENTS.md — [PENDIENTE: nombre del proyecto]

Punto de entrada para agentes que trabajen en este repositorio. Un campo sin
completar es información faltante, no un hecho; marcar `[NO APLICA]` cuando
corresponda. Para completar este contrato, aplicar
`.agentic/skills/completar-contrato.md`.

## Reglas siempre vigentes

Leer y aplicar `.agentic/golden-rules.md` antes de planificar o cambiar código,
tanto en tareas directas como orquestadas.

## Proyecto

- Propósito: `[PENDIENTE]`
- Arquitectura: `[PENDIENTE]`
- Entrypoints: `[PENDIENTE]`

## Validación

- Focalizada: `[PENDIENTE: comando para comprobar solo lo modificado]`
- Completa: `[PENDIENTE: comando para la suite completa]`

## Tests

- Framework y ubicación: `[PENDIENTE]`
- Ciclo de vida: conservar los tests de regresión. Retirar únicamente los creados
  como explícitamente temporales.

## Git

- Rama por defecto: `[PENDIENTE]`
- No hacer commit, push ni abrir PR salvo pedido explícito del usuario.

## Seguridad

- No leer ni mostrar secretos (`.env`, tokens, claves). El código sí puede
  cargarlos en runtime mediante variables de entorno.
- Rutas protegidas: `[PENDIENTE]`
- No instalar herramientas, publicar paquetes ni acceder a remotos sin
  autorización explícita.

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
