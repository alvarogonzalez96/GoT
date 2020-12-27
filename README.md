# Poyeto Final - Ingeniería Web
Game of Thrones

### Contribuidores:
- Álvaro Gonzalez - alvaro.gonzalez@opendeusto.es
- Asier Goirigolzarri - asier.goirigolzarri@opendeusto.es
- Eduardo Rodríguez - edurodriguez@opendeusto.es 
- Izai Anda - izai.anda@opendeusto.es

### Documentación:
La página web creada (de temática Juego de Tronos) consta de varias partes:
- Login: los usuarios podrán crearse una cuenta y hacer login a la página para poder hacer comentarios y quedar registrados en la base de datos de la web.
- Home: página de inicio, en la que se podrá observar una imagen de juego de tronos y un menú superior (que aparecerá en todas las páginas) a través del cual puedes ir cambiando de secciones y un pie de página con datos de interés de la web.
- Characters: ofrece la opción de ver información importante de varios personajes principales de la serie como si nombre, fecha de nacimiento, Alias, etc.
- Blog: en esta sección inicialmente aparecerá la opción de elegir la categoría sobre la que queremos informarnos (character o house) y nos mostrará las entradas del blog relacionadas con ese tema. Dentro de cada post del blog, los usuarios podrán comentar las entradas.
- Quiz: apartado en el que se realizarán preguntas sobre la serie.
- Quotes: aquí aparecerán frases célebres de la serie.
- About us: se puede consultar información sobre los creadores de la página web.

Aspectos importantes del proyecto:
1. Env: el proyecto incluye un enviroment en el que ejecutar la página web en Django.
2. Blog: donde podremos encontrar las partes del desarrollo de la web, incluye todo el desarrollo en Python de la parte del servidor de la página (admin.py, model.py, manage.py etc.), documentación y una base de datos db.sqlite3 en la que se almacenará toda la información de la página.
2.1. Templates: Consta de todos los html de la página, por una parte encontramos el html correspondiente al login y por otra parte todo el resto de secciones comentadas con anterioridad. Todo parte de un base.html que servirá de base para el resto de partes html del proyecto, por lo que todas tendrán el mismo encabezado y pie de página.
2.2. Static: Aquí podremos encontrar todo lo correspondiente a CSS, JavaScript e imágenes utilizadas en el proyecto.
2.2.1. Images: contiene las imágenes del proyecto que se cargarán siempre al entrar en la web.
2.2.2. CSS: utilizaremos un CSS (blog.css), que será el encargado de dar estilo a la página.
2.2.3. JavaScript: aquí encontramos la parte con más contenido de Static, dispone de un main.js, que obtiene información de los personajes de una API externa al proyecto, quiz.js para la lógica de la parte del quiz y quotes para la generación de frases, en estas partes se puede ver el uso de AJAX y jQuery en el proyecto.
3. La página está disponible en inglés y en castellano, se ha utilizado i18n para llevarlo a cabo.

### Entrega 3:
En cuanto a la entrega 3, hemos decidido eriquecer la parte cliente utilizando jQuery y ajax e implementar la opción del multilingüismo, haciendo disponible la web en castellano y en inglés.
Por otro lado, respecto al desarrollo con Vue hemos decidido hacerlo aparte del proyecto de GoT. Por lo que en la carpeta /vue podrás encontrar un html con el código basico para visualizar, eliminar y añadir usuarios a luna lista de usuarios. Estos usuarios tienen nombre, correo y número de teléfono.
