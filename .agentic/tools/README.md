# Herramientas

Catálogo de capacidades que los agentes pueden utilizar: utilidades locales, APIs, conectores u otros mecanismos. Una ficha describe el uso esperado; no instala ni concede acceso a una herramienta.

## Estado inicial

No hay herramientas configuradas por esta plantilla. El catálogo incluye ejemplos de referencia; al adoptarlos, comprobar que el proveedor y la integración existan en el entorno del proyecto.

| Herramienta | Capacidad | Ficha | Disponibilidad |
| --- | --- | --- | --- |
| Mutation Testing para Python | Comprobar si los tests detectan alteraciones del código. | [Mutación](python/mutation-testing.md) | No configurada |
| Análisis DRY para Python | Detectar candidatos de duplicación de código. | [DRY](python/dry-analysis.md) | No configurada |
| Análisis C.R.A.P. para Python | Medir complejidad y cobertura del código. | [C.R.A.P.](python/crap-analysis.md) | No configurada |

## Controles opcionales

1. Seleccionar un control cuando el usuario lo solicite o una regla explícita y habilitada del proyecto coincida con la tarea. La mera presencia de código Python o de una ficha no activa estos controles.
2. Comprobar disponibilidad, alcance y efectos antes de invocarlo. Una solicitud de análisis no autoriza reparaciones, instalaciones ni cambios de configuración ajenos al encargo.
3. Aplicar las reglas ya autorizadas dentro de su alcance, sin pedir de nuevo confirmación por cada invocación cubierta. Una instrucción vigente del usuario puede modificar la selección.
4. Informar `NO_SOLICITADO` cuando el control no haya sido seleccionado. Si se exige pero falta entorno o evidencia, informar `NO_VERIFICADO` con la causa; no convertirlo en aprobado.

Para mutación, DRY o C.R.A.P., consultar primero [el contrato común de Python](python/README.md): requisitos, reglas de activación, selección y lectura de resultados. Son comandos locales, no servidores MCP.

## Registrar y utilizar

1. Copiar [template.md](template.md) y completar la capacidad, las entradas, la salida y los efectos de cada operación.
2. Añadir la ficha al catálogo. Si la integración usa MCP, documentarla en [mcp/](mcp/README.md) y enlazarla aquí sin duplicar su configuración.
3. Antes del uso, comprobar disponibilidad, destino y condiciones de acceso. La operación concreta debe encajar en el alcance autorizado.
4. Examinar el resultado y conservar evidencia relevante. Ante un fallo, determinar si la operación pudo haber producido efectos antes de repetirla.

La configuración real y las credenciales se gestionan por los mecanismos del proyecto, fuera de estas fichas. Si una herramienta no está disponible, comunicar la limitación y usar una alternativa solo cuando sea compatible con la tarea.
