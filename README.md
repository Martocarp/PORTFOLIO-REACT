Portfolio React - Martiniano Ocampo

Trabajo Práctico Nº 1 de la materia Programación 4, desarrollado con React + Vite.

Este proyecto consiste en un portfolio personal de una sola página en el que presento mi perfil, las tecnologías con las que trabajo, algunos proyectos realizados y diferentes medios de contacto.

El objetivo principal del trabajo es aplicar los conceptos fundamentales de React vistos durante la cursada: componentes, JSX, props, arrays, map(), key, eventos, useState, renderizado condicional y diseño responsive.

AUTOR

Martiniano Ocampo
Programación 4 - 2026

PRESENTACIÓN

Soy Martiniano Ocampo, desarrollador web en formación con interés en el desarrollo Full Stack y la ciberseguridad.

Me gusta crear interfaces claras, funcionales y cuidadas, prestando atención tanto a la experiencia del usuario como a la calidad del código.

Disfruto especialmente trabajar en proyectos donde se combinan diseño, lógica y resolución de problemas. Actualmente continúo ampliando mis conocimientos en tecnologías web, desarrollo de aplicaciones y hacking ético.

DESCRIPCIÓN DEL PROYECTO

El portfolio fue desarrollado como una aplicación de una sola página utilizando React.

La interfaz está organizada en dos columnas:

- Una columna izquierda fija con la presentación, navegación y selector de tema.
- Una columna derecha con las secciones principales del portfolio.

El diseño utiliza una estética oscura relacionada con programación y terminales, junto con una versión clara que puede activarse desde un botón.

COMPONENTES

El proyecto está dividido en componentes para organizar mejor la interfaz y reutilizar código.

- Header: contiene la navegación principal.
- Hero: muestra la identidad MAOC\_ y una presentación breve.
- About: contiene la información personal y profesional.
- Tech: administra y muestra la sección de tecnologías.
- TechCard: tarjeta reutilizable para mostrar cada tecnología.
- Projects: contiene la sección de proyectos.
- ProjectCard: tarjeta reutilizable para mostrar la información de cada proyecto.
- Contact: contiene enlaces y formulario de contacto.
- Footer: muestra información adicional del trabajo.

TECNOLOGÍAS UTILIZADAS

- HTML
- CSS
- JavaScript
- React
- Vite
- Bootstrap
- Git
- GitHub
- Linux

PROPS

Se utilizan props para enviar información entre componentes.

Por ejemplo, TechCard recibe:

- titulo
- imagen

También se utilizan props en ProjectCard para mostrar distintos proyectos reutilizando el mismo componente.

Esto permite evitar repetir estructuras y mantener el código más organizado.

RENDERIZADO DINÁMICO

La sección de tecnologías se genera a partir de un array de datos.

Cada tecnología contiene un identificador, un título y una imagen.

Luego se utiliza map() para recorrer ese array y generar automáticamente cada TechCard.

Cada elemento generado utiliza una key basada en su identificador para que React pueda distinguir correctamente los elementos de la lista.

ESTADO E INTERACCIÓN

El proyecto utiliza useState para controlar el modo visual de la página.

El estado darkMode permite alternar entre:

- Modo oscuro.
- Modo claro.

El cambio se realiza mediante un evento onClick.

Cuando el usuario presiona el botón, cambia el estado y React actualiza la interfaz automáticamente.

También se utiliza renderizado condicional para modificar contenido y clases según el valor de darkMode.

DISEÑO

El portfolio utiliza:

- Fondo oscuro con tonos grises.
- Tipografía JetBrains Mono.
- Acentos de color.
- Navbar vertical.
- Columna izquierda fija.
- Cards para tecnologías y proyectos.
- Animaciones y efectos hover.
- Cursor _ animado en MAOC_.
- Modo claro y oscuro.
- Diseño responsive.

La sección Sobre mí utiliza una estética inspirada en una terminal de Linux para mantener una identidad visual relacionada con programación y ciberseguridad.

SECCIONES DEL PORTFOLIO

Sobre mí

Incluye una presentación personal y profesional.

Tecnologías

Muestra tecnologías y herramientas como:

- HTML
- CSS
- JavaScript
- React
- Git / GitHub
- Linux

Proyectos

Incluye distintos proyectos presentados mediante ProjectCard, con información como título, descripción, tecnologías utilizadas e imagen.

Contacto

Incluye diferentes medios de contacto y un formulario que utiliza mailto: para abrir el cliente de correo del usuario.

Footer

Incluye mi nombre, la materia Programación 4 y el año 2026.

INSTALACIÓN

Para ejecutar el proyecto localmente es necesario tener instalado Node.js y npm.

Clonar el repositorio:

git clone https://github.com/Martocarp/PORTFOLIO-REACT.git

Entrar a la carpeta del proyecto:

cd PORTFOLIO-REACT

Instalar las dependencias:

npm install

EJECUCIÓN

Para iniciar el servidor de desarrollo:

npm run dev

Vite mostrará una dirección local similar a:

http://localhost:5173/

Abrir esa dirección en el navegador.

REPOSITORIO

https://github.com/Martocarp/PORTFOLIO-REACT

USO DE INTELIGENCIA ARTIFICIAL

Durante el desarrollo del proyecto utilicé herramientas de Inteligencia Artificial como apoyo.

La IA fue utilizada principalmente para:

- La redacción y organización de este README.
- La creación y mejora de gran parte del CSS.
- La adaptación responsive del diseño.
- Consultas sobre React y JSX.
- Explicaciones de conceptos como props, useState, map(), key y renderizado condicional.
- Correcciones puntuales de sintaxis y estructura.

Gran parte del CSS fue generado con asistencia de IA, pero fue revisado, probado, modificado y adaptado por mí durante el desarrollo.

También realicé cambios manuales en colores, tamaños, tipografías, componentes, textos, distribución y estilos.

La IA fue utilizada como una herramienta de asistencia y aprendizaje. Las decisiones finales fueron revisadas y controladas por mí, y comprendo el funcionamiento general del código implementado.

OBJETIVO ACADÉMICO

Este proyecto fue desarrollado como parte del Trabajo Práctico Nº 1 - Mi Portfolio en React de la materia Programación 4.

El objetivo fue demostrar el uso de los fundamentos de React mediante:

- Componentes
- JSX
- Props
- Arrays
- map()
- key
- Eventos
- useState
- Renderizado condicional
- Diseño responsive

ESTADO DEL PROYECTO

El proyecto se encuentra funcional y puede ejecutarse localmente mediante:

npm run dev

Desarrollado con fines académicos por Martiniano Ocampo.
