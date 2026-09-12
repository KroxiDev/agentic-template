# Plantilla de capa agéntica

Estructura documental para incorporar una capa agéntica a un proyecto de software, documentación, investigación, análisis u otro trabajo asistido por agentes. Contiene únicamente carpetas y archivos Markdown, sin dependencias de un proveedor, modelo, lenguaje o plataforma.

El proyecto que la adopte será responsable de adaptar sus instrucciones, roles, procedimientos y fuentes. Los ejemplos son un punto de partida; cada componente puede modificarse, ampliarse o retirarse.

## Estructura

```text
.
├── AGENTS.md                         # Orquestador y punto de entrada
├── README.md                         # Guía de la plantilla
└── .agentic/
    ├── agents/                       # Responsabilidades de los agentes
    │   ├── README.md
    │   ├── researcher.md
    │   ├── executor.md
    │   ├── reviewer.md
    │   └── template.md
    ├── skills/                       # Procedimientos reutilizables
    │   ├── README.md
    │   ├── planning/
    │   │   └── SKILL.md
    │   ├── verification/
    │   │   └── SKILL.md
    │   └── template.md
    ├── tools/                        # Catálogo de capacidades e integraciones
    │   ├── README.md
    │   ├── template.md
    │   ├── python/                   # Ejemplos opcionales de calidad con Agentic Core
    │   │   ├── README.md
    │   │   ├── mutation-testing.md
    │   │   ├── dry-analysis.md
    │   │   └── crap-analysis.md
    │   └── mcp/
    │       ├── README.md
    │       └── template.md
    ├── context/                      # Contexto del proyecto y continuidad
    │   ├── project.md
    │   ├── memory/
    │   │   ├── README.md
    │   │   ├── short-term.md
    │   │   └── long-term.md
    │   └── session/
    │       └── state.md
    └── knowledge/                    # Fuentes de conocimiento y consulta
        ├── README.md
        ├── docs/
        │   └── README.md
        ├── db/
        │   └── README.md
        └── vector-store/
            └── README.md
```

## Correspondencia con la capa agéntica

| Componente | Responsabilidad | Entrada |
| --- | --- | --- |
| Orquestador | Entender la solicitud, planificar, seleccionar recursos, coordinar y entregar. | [AGENTS.md](AGENTS.md) |
| Skills | Describir cómo realizar una tarea repetible. | [Catálogo de skills](.agentic/skills/README.md) |
| Agentes especializados | Delimitar quién se ocupa de una tarea y qué debe devolver. | [Catálogo de agentes](.agentic/agents/README.md) |
| Tools / MCP | Documentar las capacidades disponibles y sus condiciones de uso. | [Herramientas](.agentic/tools/README.md) y [MCP](.agentic/tools/mcp/README.md) |
| Contexto / Memoria | Conservar contexto del proyecto, trabajo reciente, aprendizajes y estado de sesión. | [Proyecto](.agentic/context/project.md) y [continuidad](.agentic/context/memory/README.md) |
| Knowledge / RAG | Localizar fuentes documentales, datos y mecanismos opcionales de recuperación. | [Conocimiento](.agentic/knowledge/README.md) |

El orquestador consulta solo los recursos pertinentes. Los roles pueden aplicar skills, utilizar herramientas y consultar conocimiento; no es obligatorio usar todos los componentes en cada tarea. La memoria conserva continuidad del trabajo, mientras que conocimiento apunta a las fuentes que lo sustentan.

Como prueba de concepto, [tools/python/](.agentic/tools/python/README.md) incluye fichas de mutación, DRY y C.R.A.P. mediante Agentic Core. Son ejemplos opcionales para proyectos Python; se activan por solicitud o por una regla explícita del proyecto adoptante. La plantilla conserva su uso general sin este componente.

## Adaptar a un proyecto

1. Incorporar `.agentic/` al proyecto de destino y adaptar el contenido de `AGENTS.md` a su punto de entrada. Si ya existen instrucciones o una carpeta equivalente, integrar el contenido conservando las reglas y los archivos propios del proyecto.
2. Completar [el contexto del proyecto](.agentic/context/project.md): propósito, límites, convenciones y forma de comprobar resultados. `[PENDIENTE]` señala una decisión abierta; usar `[NO APLICA]` cuando corresponda.
3. Seleccionar los agentes y skills útiles. Adaptar sus ejemplos o crear otros desde los moldes de cada catálogo, actualizando sus enlaces.
4. Documentar las herramientas y fuentes reales. Mantener como no configuradas las integraciones que el proyecto todavía no utilice.
5. Decidir si se conservará memoria entre sesiones y completar su política de uso. Las fichas iniciales están vacías y no representan trabajo realizado.
6. Indicar al entorno de agentes cómo acceder a esta entrada y comprobar una tarea acotada. La carga de `AGENTS.md`, las skills y los roles depende del entorno elegido; los archivos por sí solos no habilitan delegación ni conexiones.

## Convenciones de la plantilla

- `README.md` explica el propósito de una carpeta y permite descubrir sus recursos.
- `template.md` es un molde para copiar y completar; no representa un recurso operativo.
- `SKILL.md` contiene los metadatos y el procedimiento de una skill de ejemplo.
- Los enlaces relativos permiten trasladar la estructura junto al proyecto.
- Las decisiones particulares pertenecen al proyecto adoptante: evitar convertir ejemplos en requisitos universales.

Esta entrega no contiene código ejecutable, configuración de servicios ni almacenamiento real de bases de datos o vectores. MCP y RAG quedan como espacios documentales opcionales. La plantilla tampoco requiere inicializar un repositorio para utilizarse.
