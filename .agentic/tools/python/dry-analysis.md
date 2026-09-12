# Análisis DRY para Python

Detecta candidatos de duplicación en funciones y métodos Python del alcance elegido. Proveedor de ejemplo: Agentic Core con `dry4python`. DRY alude a evitar duplicación; este control es un análisis estático, distinto de una ejecución de tests o de `--dry-run`.

Antes de usarlo, aplicar [los requisitos, activación y selección comunes](README.md). La presencia de esta ficha no habilita la ejecución.

## Entradas y comando

- Archivos o carpetas Python que deben compararse entre sí.
- Límites reales de similitud y tamaño en `limits.dry`.

Ejemplo para un consumidor integrado, sustituyendo la ruta:

```text
node .agentic-core/runtime-launcher.mjs agentic-quality dry --scope src
```

No acepta `--test` ni ejecuta tests, C.R.A.P. o mutación.

## Qué hace y qué devuelve

1. Analiza copias temporales del código medido mediante el motor estático.
2. Informa candidatos con archivos, símbolos, líneas, similitud y resolución, cuando exista.
3. Conserva el resultado del análisis actual en `.agentic-core/quality/dry.json`.

## Interpretación y límites

- Un candidato pendiente produce un rechazo del análisis; debe examinarse antes de decidir si corresponde refactorizar o justificar la duplicación.
- El análisis autónomo muestra los candidatos actuales, incluidos los preexistentes. No decide cuáles fueron introducidos por la tarea.
- El alcance y los límites de tamaño restringen la detección. Una ausencia de candidatos no demuestra ausencia de duplicación fuera del código medido.
- El motor de referencia mide funciones y métodos. Código procedural no medible, errores sintácticos o problemas de integridad pueden conservar evidencia parcial con `NO_VERIFICADO`.
- El comando no repara archivos. Un resultado `approved` describe este análisis y no aprueba una implementación.

## Evidencia a entregar

Solicitud o regla que activó el control, comando, alcance efectivo, estado y causa, candidatos con ubicaciones, limitaciones e informe generado. Mantener separados los hallazgos y las propuestas de modificación.

Fuente de implementación de la revisión de referencia: [python-dry.js](https://github.com/KroxiDev/agentic-core/blob/4f7187261e641d762ee7a878dc5b91df643c8bd8/src/quality/python-dry.js).
