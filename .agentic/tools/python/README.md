# Controles opcionales para Python

Prueba de concepto documental con [Agentic Core de KroxiDev](https://github.com/KroxiDev/agentic-core) como proveedor. Las fichas describen tres comandos independientes de calidad; el proyecto adoptante puede conservarlos, sustituir el proveedor o retirar este componente.

**Disponibilidad en esta plantilla: no configurada. Ejecución: NO_VERIFICADO.** Solo se incluyen archivos Markdown; no hay runtime instalado ni una unidad Python de ejemplo para ejecutar los controles.

## Catálogo

| Ficha | Comando de calidad | Motor de referencia | Ejecuta tests |
| --- | --- | --- | --- |
| [Mutation Testing](mutation-testing.md) | `agentic-quality mutate` | `mutate4py` | Sí: referencia sin mutar y mutantes seleccionados. |
| [DRY](dry-analysis.md) | `agentic-quality dry` | `dry4python` | No: análisis estático. |
| [C.R.A.P.](crap-analysis.md) | `agentic-quality crap` | `crap4py` | Sí: para obtener cobertura atribuible. |

## Requisitos del proyecto adoptante

- Agentic Core instalado y configurado para su unidad Python, con `.agentic-core/runtime-launcher.mjs`, runtime, herramientas privadas y configuración válidos.
- Node.js 20+ para el lanzador y Python 3.11+. C.R.A.P. y mutación necesitan el entorno de tests del proyecto con pytest y sus dependencias.
- Integración Python declarada por el proyecto: código medido, comando de tests, intérprete, directorio de ejecución e inputs necesarios. Los límites se toman de la configuración real de Agentic Core.
- Permiso vigente para las operaciones y sus efectos. Las ejecuciones generan informes, archivos temporales y, cuando corresponde, ejecutan los tests del proyecto.

El instalador de la revisión consultada integra Codex; estas fichas documentan solo la invocación de calidad mediante su CLI. El uso desde otro entorno debe comprobarse allí. Incorporar estos Markdown no instala Agentic Core ni activa sus roles.

## Activación por solicitud o por regla

Aplicar la [política de controles opcionales](../README.md). Una petición como «ejecuta mutación sobre este módulo con estos tests» selecciona ese control para ese encargo. Pedir únicamente DRY mantiene C.R.A.P. y mutación sin seleccionar.

Si el proyecto quiere selección por tipo de tarea, completar y habilitar reglas en la tabla siguiente, o reemplazarla por un enlace a su política existente. Esta tabla expresa instrucciones para el agente; no es configuración que la CLI lea automáticamente.

| Regla | Condición de la tarea | Controles | Código | Tests, si aplica | Habilitada |
| --- | --- | --- | --- | --- | --- |
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | No |

Ejemplo de regla que el proyecto podría adoptar: al modificar el comportamiento de un módulo Python concreto, ejecutar C.R.A.P. y mutación sobre ese módulo con sus tests. Este ejemplo está inactivo hasta que el proyecto lo defina y habilite.

1. Al preparar la tarea, identificar qué solicitud o regla habilitada corresponde y qué controles exige.
2. Resolver las rutas y comprobar los requisitos de cada control. Preguntar solo si falta información que impida determinar el alcance o la autorización.
3. Invocar únicamente los comandos seleccionados. Recalcular la selección en cada tarea; una ejecución anterior no habilita controles para las siguientes.
4. Entregar resultados y limitaciones según el contrato siguiente. Los cambios de código derivados de un hallazgo deben estar incluidos en el encargo para realizarlos.

## Invocación y selección

Los ejemplos de cada ficha se ejecutan desde la raíz del **proyecto consumidor ya integrado**. Las rutas `src/modulo.py` y `tests/test_modulo.py` son ilustrativas y deben sustituirse por rutas existentes de ese proyecto.

- `--scope` selecciona archivos o carpetas de código; puede repetirse. Sin él se usa el alcance configurado, que debe conocerse antes de invocar el control.
- C.R.A.P. y mutación aceptan `--test` repetible. Sin selección explícita se conserva el comando de tests configurado. DRY no acepta `--test`.
- Las rutas son relativas a la raíz del consumidor. Estos comandos no admiten globs, rutas externas ni selección por función.
- La selección por flags es transitoria y no modifica la configuración del proyecto. Las fichas usan el análisis del estado actual: no requieren `prepare`, no utilizan `--changes` y no inician una orquestación.

Si se necesita comparar un cambio con su estado inicial, consultar el flujo de tareas de Agentic Core. Un análisis actual no sustituye esa comparación ni emite un cierre incremental `QUALITY_OK`.

## Resultados y efectos

Conservar el estado, código de causa, alcance efectivo, hallazgos y referencia al informe de cada ejecución. Usar la salida emitida por la herramienta; `AGENTIC_CORE_OUTPUT=json` solicita su representación estructurada cuando el entorno la necesite.

| Estado del control | Interpretación |
| --- | --- |
| `approved` | Cumple ese control para el alcance y estado medidos. |
| `rejected` | Hay un incumplimiento comprobado; describirlo con evidencia. |
| `NO_VERIFICADO` | Falta evidencia completa o existen errores de entorno, cobertura, integridad o ejecución. |
| `NO_APLICA` | El motor determinó que no hay elementos exigibles; conservar su explicación. |

Un código de salida cero también puede acompañar `NO_APLICA`; leer el estado y la causa. Un control aprobado no acredita los otros controles ni aprueba por sí solo la implementación completa. Las tres fichas son independientes y ninguna exige ejecutar automáticamente las otras dos.

Los informes se guardan bajo `.agentic-core/quality/` en el proyecto consumidor. Las pruebas usan copias controladas y el entorno del proyecto; eso no equivale a aislar servicios externos a los que accedan sus tests. Evitar ejecuciones simultáneas sobre la misma instalación y tarea cuando compartan informes o presupuesto.

## Fuente y mantenimiento

Contrato comprobado por lectura de documentación y código del clon de `KroxiDev/agentic-core`, revisión `4f7187261e641d762ee7a878dc5b91df643c8bd8`, el 2026-09-12. La ejecución de estos controles desde esta plantilla sigue sin verificar.

- [Requisitos y controles del proveedor](https://github.com/KroxiDev/agentic-core/blob/4f7187261e641d762ee7a878dc5b91df643c8bd8/README.md).
- [Referencia técnica de Python, esquema 3](https://github.com/KroxiDev/agentic-core/blob/4f7187261e641d762ee7a878dc5b91df643c8bd8/docs/technical-reference.md).

Al cambiar de versión o proveedor, contrastar comandos, selección, efectos y resultados con su contrato vigente. La referencia técnica también contiene interfaces históricas; estos ejemplos corresponden al esquema 3.
