# Skills

Procedimientos reutilizables que el orquestador o un agente puede aplicar a una tarea. Estos ejemplos son generales; el proyecto define sus comprobaciones y convenciones concretas.

## Catálogo inicial

| Skill | Cuándo consultar | Entrada |
| --- | --- | --- |
| Planificación | Cuando una tarea necesite descomposición, orden o gestión de dependencias. | [planning/SKILL.md](planning/SKILL.md) |
| Verificación | Al contrastar un entregable con sus criterios de aceptación. | [verification/SKILL.md](verification/SKILL.md) |

## Añadir una skill

1. Crear una carpeta con nombre breve en minúsculas y guiones.
2. Copiar [template.md](template.md) dentro de ella como `SKILL.md` y completar los campos. Hacer coincidir el campo `name` con el nombre de la carpeta.
3. Describir cuándo aplica, sus entradas, el procedimiento y una condición observable de finalización.
4. Añadir la entrada al catálogo. Mantener referencias adicionales junto a la skill solo si su contenido resulta necesario.

El encabezado de cada `SKILL.md` usa `name` y `description` como metadatos dentro del propio Markdown. Esta carpeta documenta procedimientos; su descubrimiento automático, instalación o activación dependen de la herramienta que adopte el proyecto.
