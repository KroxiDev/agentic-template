# Mutation Testing para Python

Evalúa la eficacia de los tests introduciendo alteraciones del código y comprobando cuáles detectan. Proveedor de ejemplo: Agentic Core con `mutate4py`.

Antes de usarlo, aplicar [los requisitos, activación y selección comunes](README.md). La presencia de esta ficha no habilita la ejecución.

## Entradas y comando

- Archivos o carpetas Python a medir.
- Tests pertinentes o comando de tests ya configurado en el proyecto.
- Umbral y presupuesto de la configuración real: `limits.mutationScore` y límites de operación.

Ejemplo para un consumidor integrado, sustituyendo las rutas:

```text
node .agentic-core/runtime-launcher.mjs agentic-quality mutate --scope src/modulo.py --test tests/test_modulo.py
```

## Qué hace y qué devuelve

1. Ejecuta una referencia sin mutaciones con los tests y cobertura del proyecto.
2. Genera y evalúa mutantes en una copia controlada, con el alcance seleccionado.
3. Informa el score del estado actual, los resultados por mutante y la evidencia en `.agentic-core/quality/mutation.json`.

Distingue mutantes detectados (`killed`), supervivientes (`survived`), sin cobertura (`uncovered`) y resultados inconclusos. Los supervivientes y los mutantes sin cobertura afectan el score; los equivalentes se excluyen solo con prueba estática del motor.

## Interpretación y límites

- Para aprobar, el resultado debe ser completo y alcanzar el umbral configurado. Timeout, error, interrupción o mutantes pendientes dejan la comprobación sin verificar.
- Sin mutantes exigibles puede devolver `NO_APLICA` sin score; no presentarlo como una eficacia del 100 %.
- El resultado corresponde al código y tests medidos en su estado actual. No constituye una comparación con el inicio de la tarea ni una aprobación global.
- Un hallazgo permite proponer mejoras en los tests; modificar tests o código requiere que el encargo incluya esas correcciones.

## Evidencia a entregar

Solicitud o regla que activó el control, comando, alcance efectivo, estado y causa, score cuando exista, resumen de mutantes, límites alcanzados e informe generado.

Fuente de implementación de la revisión de referencia: [python-mutation.js](https://github.com/KroxiDev/agentic-core/blob/4f7187261e641d762ee7a878dc5b91df643c8bd8/src/quality/python-mutation.js).
