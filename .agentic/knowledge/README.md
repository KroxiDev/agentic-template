# Conocimiento y recuperación

Índice de fuentes que permiten fundamentar el trabajo de los agentes. Mantener referencias a la fuente original, su alcance y su vigencia; evitar copias completas que puedan quedar desactualizadas.

## Tipos de fuente

| Recurso | Qué documenta |
| --- | --- |
| [Docs](docs/README.md) | Documentación, especificaciones, glosarios y decisiones del proyecto. |
| [DB](db/README.md) | Estructura y semántica de datos, junto con condiciones de consulta. |
| [Vector Store](vector-store/README.md) | Colecciones e índices semánticos, si el proyecto los utiliza. |

Estas carpetas contienen documentación Markdown; no contienen bases de datos, índices ni un sistema de recuperación en ejecución.

## Consulta de fuentes

1. Identificar la pregunta y seleccionar la fuente más directa que pueda responderla.
2. Comprobar que el acceso esté disponible y autorizado. Consultar solo la información necesaria mediante las [herramientas documentadas](../tools/README.md).
3. Registrar qué fuente respalda cada hallazgo relevante y su versión o fecha cuando afecte la validez.
4. Si las fuentes discrepan o están incompletas, señalar la diferencia y sus límites en el resultado.

## RAG opcional

RAG consiste en recuperar información de fuentes para usarla como contexto al elaborar una respuesta. Puede apoyarse en documentos, consultas u otros mecanismos; el almacenamiento vectorial es una opción, no un requisito.

Si el proyecto lo incorpora, documentar qué se recupera, cómo se conserva la procedencia y cómo se comprueba la calidad. Un fragmento recuperado es evidencia a evaluar: debe poder rastrearse a su fuente y no reemplaza las instrucciones del agente.
