---
name: verification
description: Contrastar un entregable con sus criterios de aceptación antes de darlo por terminado o al revisar un resultado existente.
---

# Verificación

## Entradas

Entregable o versión a comprobar, criterios de aceptación, convenciones aplicables y evidencia existente.

## Controles adicionales

Cuando la solicitud o una regla explícita y habilitada del proyecto exija controles adicionales, consultar el [catálogo de herramientas](../../tools/README.md) y las fichas seleccionadas. Incorporar su evidencia dentro del alcance autorizado. Los controles no seleccionados permanecen `NO_SOLICITADO` y no se convierten en nuevos requisitos de aceptación.

## Procedimiento

1. Relacionar cada criterio con una comprobación proporcionada al resultado y al riesgo. Puede ser lectura, contraste con fuentes, validación de datos, pruebas u otro método adecuado al proyecto.
2. Confirmar que la evidencia disponible corresponda al artefacto actual. Repetir comprobaciones solo cuando un cambio, fallo o incertidumbre lo justifique.
3. Realizar las comprobaciones que estén disponibles y autorizadas. Documentar las que no se puedan ejecutar y por qué.
4. Clasificar cada criterio como `CUMPLE`, `NO_CUMPLE` o `NO_VERIFICADO`, citando la evidencia pertinente.
5. Informar el resultado y el efecto de los incumplimientos o verificaciones pendientes sobre la entrega.

## Salida y finalización

Una evaluación por criterio con evidencia y limitaciones. La verificación termina cuando todos los criterios tienen estado; el entregable solo puede declararse conforme cuando todos los criterios necesarios cumplen. Una comprobación parcial no demuestra comportamientos que quedaron fuera de su alcance.
