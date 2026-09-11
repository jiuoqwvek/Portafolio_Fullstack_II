# Mi Portafolio — Aolani Caiguan

Portafolio personal de una sola página (one-page), desarrollado como proyecto de la asignatura **Fullstack II**. Presenta información profesional, habilidades técnicas, proyectos realizados y un formulario de contacto funcional.

**Repositorio:** https://github.com/jiuoqwvek/Portafolio_Fullstack_II

## Descripción del proyecto

El sitio está pensado para mostrar el perfil de una estudiante de Ingeniería en Informática (Duoc UC) a reclutadores, compañeros o cualquier visitante interesado en su trabajo. Es completamente estático (HTML, CSS y JavaScript "vanilla", sin frameworks ni build tools), con un diseño propio en tonos pastel y elementos decorativos hechos a mano en CSS.

### Secciones

| Sección | Contenido |
|---|---|
| **Inicio** | Presentación, foto de perfil y llamada a la acción hacia Proyectos. |
| **Sobre mí** | Breve reseña personal y académica. |
| **Habilidades** | Lenguajes, bases de datos, herramientas y frameworks, agrupados en dos columnas. |
| **Proyectos** | Tarjetas con los proyectos desarrollados, tecnologías usadas y enlace al repositorio de cada uno. |
| **Contacto** | Formulario de contacto (validado con JavaScript) más correo y GitHub directos. |

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `main`, `section`, `article`, `address`, `footer`), con atributos de accesibilidad (`aria-label`, `aria-labelledby`, `aria-live`, `aria-hidden`).
- **CSS3** en un archivo externo (`style.css`): variables CSS (`:root`) para la paleta de colores, Flexbox y Grid para los layouts, `clamp()` para tipografía responsiva, y `@media` queries para tablet y celular.
- **JavaScript** (`script.js`), sin librerías externas: validación del formulario de contacto en el cliente.
- **FormSubmit** como servicio externo para el envío del formulario de contacto, sin necesidad de backend propio.

## Estructura del proyecto

```
Potafolio_Fullstack_II/
├── index.html          # Estructura y contenido de la página
├── style.css           # Todos los estilos (paleta, layout, responsive, decoraciones)
├── script.js           # Validación del formulario de contacto
├── yo_chiikawa.png     # Ilustración de perfil
└── README.md           # Este archivo
```

## Cómo verlo localmente

No requiere instalación ni dependencias. Basta con:

1. Clonar el repositorio: `git clone https://github.com/jiuoqwvek/Portafolio_Fullstack_II.git`
2. Abrir `index.html` directamente en el navegador (doble clic, o clic derecho → "Abrir con").

También puede servirse con cualquier servidor estático, por ejemplo con la extensión **Live Server** de VS Code, para aprovechar la recarga automática mientras se edita.

## Validaciones del formulario de contacto

El formulario (`#formulario-contacto`) valida en el navegador, antes de enviar, que:

- **Nombre**: tenga al menos 3 caracteres.
- **Correo electrónico**: contenga un `@` que no esté al inicio ni al final del texto.
- **Mensaje**: tenga al menos 10 caracteres.

Si algún campo no cumple, se cancela el envío (`event.preventDefault()`), se marca el campo con un borde rojo (`.invalido`) y aparece un mensaje de error específico debajo de él; además se enfoca automáticamente el primer campo con error. Los errores se limpian solos apenas la persona corrige el campo, sin esperar a un nuevo intento de envío. Si todos los campos son válidos, el formulario se envía con normalidad al servicio FormSubmit.

## Despliegue

El sitio está pensado para desplegarse como página estática (por ejemplo con **GitHub Pages**, activándolo en *Settings → Pages* del repositorio, apuntando a la rama `main`).

## Autora

**Aolani Caiguan** — [GitHub](https://github.com/jiuoqwvek) · [correo](mailto:noemiaolanicaiguan@gmail.com)
