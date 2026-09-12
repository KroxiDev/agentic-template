# Análisis C.R.A.P. para Python

Combina complejidad y cobertura para evaluar el riesgo del código medido. Proveedor de ejemplo: Agentic Core con `crap4py`. Es una métrica de calidad que necesita evidencia de tests; no sustituye las comprobaciones funcionales.

Antes de usarlo, aplicar [los requisitos, activación y selección comunes](README.md). La presencia de esta ficha no habilita la ejecución.

## Entradas y comando

- Archivos o carpetas Python a medir.
- Tests capaces de aportar cobertura del código seleccionado.
- Límite de C.R.A.P. establecido por el proyecto en `limits.crap`.

Ejemplo para un consumidor integrado, sustituyendo las rutas:

```text
node .agentic-core/runtime-launcher.mjs agentic-quality crap --scope src/modulo.py --test tests/test_modulo.py
```

## Qué hace y qué devuelve

1. Ejecuta los tests pertinentes en una copia controlada y obtiene cobertura atribuible al código medido.
2. Calcula C.R.A.P. y contrasta los valores con el límite configurado.
3. Informa valores, ubicaciones, incumplimientos y evidencia parcial en `.agentic-core/quality/crap.json`.

## Interpretación y límites

- Una medición completa dentro del límite aprueba este control; un valor por encima del límite o fallos de tests comprobados pueden rechazarlo.
- La cobertura ausente, incompatible o no atribuible produce `NO_VERIFICADO`, no una medición favorable ni una cobertura cero inventada.
- El resultado es del estado actual y no distingue por sí solo deuda previa de problemas introducidos por el cambio.
- La aceptación de esta métrica no acredita ausencia de duplicación ni eficacia frente a mutaciones. Los otros controles permanecen independientes.
- Ante un incumplimiento, describir la causa y proponer acciones. Cambiar código, tests o umbrales requiere estar dentro del alcance autorizado.

## Evidencia a entregar

Solicitud o regla que activó el control, comando, código y tests efectivos, estado y causa, valores y límite, cobertura incompleta si existe e informe generado.

Fuente de implementación de la revisión de referencia: [python-crap.js](https://github.com/KroxiDev/agentic-core/blob/4f7187261e641d762ee7a878dc5b91df643c8bd8/src/quality/python-crap.js).
