# Agentes especializados

Un agente define una responsabilidad, sus límites y el resultado que debe entregar. Una skill describe un procedimiento que puede usar cualquiera de los roles. Estos perfiles son ejemplos adaptables, no procesos ya configurados.

## Catálogo inicial

| Rol | Cuándo utilizarlo | Ficha |
| --- | --- | --- |
| Investigador | Resolver una pregunta mediante fuentes y evidencia. | [researcher.md](researcher.md) |
| Ejecutor | Producir o modificar un entregable dentro de un alcance definido. | [executor.md](executor.md) |
| Revisor | Evaluar un resultado frente a requisitos y detectar problemas. | [reviewer.md](reviewer.md) |

Si el entorno no admite subagentes, el orquestador puede asumir estos roles de forma secuencial. Solo describirlo como revisión independiente si realmente la realizó otro agente o persona.

## Encargo y retorno

1. El orquestador entrega objetivo, alcance permitido, fuentes pertinentes, dependencias, criterios de aceptación y formato de salida. Para cambios, delimita los artefactos que puede editar cada agente.
2. El agente realiza la tarea asignada y devuelve resultado, evidencia, artefactos afectados, dudas y bloqueos. Una necesidad de ampliar alcance se comunica al orquestador.
3. El orquestador comprueba e integra el resultado. La ejecución paralela depende de las capacidades y reglas del entorno y se reserva para tareas sin dependencias ni escrituras superpuestas.

## Añadir un rol

1. Copiar [template.md](template.md) con un nombre descriptivo.
2. Completar responsabilidad, entradas, límites y salida.
3. Incorporar la ficha al catálogo y definir cuándo aporta valor frente a la ejecución directa.
