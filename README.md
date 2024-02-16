# Proyecto cinema Quality Pictures

## Pasos para correr el proyecto
<ol>
  <li>
  Abrir el archivo app.module.ts 
    <ul>
      <li>Buscar la ruta cinema_back/src/app.module.ts y abrir el archivo.</li>
      <li>Buscar la línea <i>username: 'root'</i> y cambiar root por tu usuario.</li>
      <li>Buscar la línea <i>password: 'contraseña'</i> y cambiar contraseña por tu contraseña, si no tienes deja vacío el campo.</li>
      <li>Buscar la línea <i>database: 'quality'</i> y cambiar quality por el nombre de la base de datos.</li>
    </ul>
  </li>
  <li>Para correr el front.
    <p>En consola:</p>
    <ul>
      <li>cd cinema_front</li>
      <li>npm start --watch</li>
    </ul>
  </li>
  <li>Para correr el back.
    <p>Abrir la BD "quality" con MySQL o XAMPP</p>
    <p>En consola:</p>
    <ul>
      <li>cd cinema_back</li>
      <li>npm run start:dev</li>
    </ul>
  </li>
</ol>

## Credenciales para iniciar sesión como administrador
<ul>
  <li>Correo: veronica@gmail.com</li>
  <li>Contraseña: Vero_12345</li>
</ul>

## Descartar cambios locales
<ul>
  <li>git reset</li>
  <li>git checkout -- .</li>
  <li>git clean -fd</li>
</ul>


## Requerimientos del proyecto
<p>Al ingresar al sitio, se tendrá tendrá una pantalla con el Login (usuario y contraseña), además un botón "Registrarme", al dar click en este botón aparecerá una ventana emergente que solicitará la siguiente información:</p>

- [x] Tipo de documento (debe ser una lista desplegable).
- [x] Número de documento.
- [x] Nombres.
- [x] Apellidos.
- [x] Correo electrónico (será su usuario).
- [x] Contraseña.
- [x] Confirmación de contraseña.
- [x] El correo electrónico debe ser válido.
- [x] La contraseña debe ser de longitud mínima 5, y debe contener letras mayúsculas, letras minúsculas y números.
- [x] La contraseña y la confirmación de contraseña deben ser idénticos.
- [x] El campo contraseña y confirmación de contraseña deben tener los caracteres ocultos.
- [x] La aplicación web debe estar protegida y debe consumir los servicios de autenticación del back para el inicio de sesión.

<p>El home tendrá una barra de menú con las siguientes funcionalidades:</p>

- [x] Cartelera.
- [x] Lista de reservas.
- [x] El home tendrá una imagen de fondo llamativa relacionada al tema del sitio, venta de boletería.

<p>Al seleccionar la funcionalidad "Cartelera" del menú, se abre la pantalla de peliculas en cartelera. En esta pantalla se deben presentar todas las películas que estén en cartelera y deben contener la siguiente información:</p>

- [x] Título.
- [x] Género.
- [x] Imagen promocional.
- [x] Duración.

<p>Cuando el usuario seleccione una de las películas, debe ir a una pantalla donde se muestre la información más detallada sobre la misma:</p>

- [x] Título.
- [x] Género.
- [x] Sinópsis.
- [x] Imagen promocional.
- [x] Formato (3D o 2D).
- [x] Duración.
- [x] Horarios disponibles, debe ser una lista desplegable, los horarios disponibles serán siempre 12pm, 3pm, 6pm, 9pm.
- [x] Valor de la boleta.
- [ ] Al seleccionar el horario de preferencia y presionar el botón Reservar, se presentará una ventana con la vista de las sillas disponibles, el usuario podrá seleccionar las sillas de su preferencia. Cada vez que seleccione o deseleccione un asiento, se verá un cambio en un texto que indica la cantidad de boletas y el valor total de la reserva (cantidad de boletas x valor de la boleta).
- [ ] Para finalizar debe dar en el botón guardar, la ventana emergente se cerrará en este momento y la información de la reserva se cargará a la lista de reservas del usuario. Se deberá enviar un correo electrónico con el detalle de la reserva.
- [ ] La entrega de boletas se hace en sitio, por lo cual, en este momento, las sillas seleccionadas por el usuario deberán quedar como no disponibles para la película y hora seleccionadas.
- [ ] Todas las reservas se hacen para el día en curso, por lo cual un usuario no podrá realizar una reserva para un horario ya pasado en el día que la realiza.
- [ ] En esta pantalla se deben visualizar todas las reservas que tiene un usuario, con el nombre de la película, el horario, la cantidad de sillas y el valor de la reserva.
- [ ] En la pantalla de visualización de reservas, cada reserva tendrá un botón "Cancelar Reserva", mediante el cual el usuario podrá cancelar la reserva en su totalidad, la presionar el botón se verá un mensaje emergente "¿Desea cancelar esta reserva en su totalidad?" con un botón "Sí" y un botón "No", al presionar "Sí", la reserva se cancelará en su totalidad y las sillas para la película y hora deberán liberarse.

<p>Al ingresar a la funcionalidad "Administrar productos" se abrirá una pantalla que presente una tabla con la lista de todas las películas que se encuentran creados en el sistema y un botón "Adicionar película", la tabla deberá tener los siguientes campos:</p>

- [x] Título
- [x] Género
- [x] Sinópsis
- [x] Imagen promocional
- [x] Formato (3D o 2D)
- [x] Duración
- [x] Valor de la boleta
- [ ] Un botón "Editar película".
- [ ] Un botón "Eliminar película"

<p>Al ingresar a la funcionalidad "Administrar películas" se abrirá una pantalla que presente un botón "Adicionar película", al dar click en dicho botón, se abrirá una ventana emergente mediante la cual el usuario podrá ingresar la siguiente información:</p>

- [x] Título
- [x] Género
- [x] Sinópsis
- [x] Imagen promocional
- [x] Formato (3D o 2D)
- [x] Duración
- [x] Valor de la boleta

<p>Al ingresar a la funcionalidad "Administrar películas" y presionar el botón "Editar película" de alguna película, se abrirá una ventana emergente que permitirá al usuario modificar la siguiente información de dicho producto:</p>

- [ ] Título
- [ ] Género
- [ ] Sinópsis
- [ ] Imagen promocional
- [ ] Formato (3D o 2D)
- [ ] Duración
- [ ] Valor de la boleta
- [ ] Al ingresar a la funcionalidad "Administrar películas" y presionar el botón "Eliminar película" de alguna película, se abrirá una ventana emergente con la pregunta "¿Desea eliminar la película?" y un botón "Sí" y un botón "No", al presionar "Sí" la ventana emergente se cerrará y la película quedará eliminada completamente del sistema, al presionar "No" la ventana emergente se cerrará sin eliminar el producto.

 ## Restricciones
<ul>
  <li>Se sugiere dar prioridad a las funcionalidades de Comprador.</li>
  <li>Debe ser responsive para que pueda ser vsualizado desde dispositivos móviles.</li>
  <li>Se debe usar un token JWT para la comunicación entre el frontend y el backend.</li>
  <li>Un Administrador también podrá comprar.</li>
  <li>El administrador debe ser creado directamente por Base de Datos.</li>
  <li>Para facilitar la presentacón gráfica de las sillas, puede considerarse el tamaño de la sala pequeño (no menos de 10 sillas).</li>
  <li>La selección gráfica de sillas podrá ser reemplazada por alguna otra estrategia que cumpla la necesidad.</li>
  <li>Los horarios disponibles podrán ser dinámicos para cada película si así se desea, queda a criterio del desarrollador.</li>
  <li>Los prototipos de la pestaña "Prototipos" son de referencia, no se requiere que la solución sea idéntica, se tiene libertad para la realización de la solución, siempre y cuando cumpla la necesidad.</li>
</ul>			

 ## Películas para crear
{"titulo":"Aquaman",
"sinopsis":"Después de no lograr vencer a Aquaman la primera vez, Black Manta, aún impulsado por la necesidad de vengar la muerte de su padre, no escatimará esfuerzos para derrotar de una vez por todas a Aquaman. Esta vez, Black Manta es más temible que nunca, empuñando el poder del mítico Tridente Negro, que libera un antiguo y malévolo poder. Para vencerlo, Aquaman recurrirá a su hermano encarcelado Orm, el antiguo Rey de Atlantis, para forjar una alianza inesperada. Juntos, deberán dejar de lado sus diferencias para proteger su reino, salvar a la familia de Aquaman y al mundo de una destrucción inevitable.",
"formato":"3D",
"duracion":115,
"img_promocional":"https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/4/4/9/49441-1-esl-CO/4a01e94b2e5f-480x670.jpg",
"precio":17,
"horario":"3:00pm-9:00pm",
"id_genero":5}

{"titulo":"El paseo 7",
"sinopsis":"¿Se está perdiendo la tradición colombiana del paseo de olla? Dos ingenuos documentalistas deciden aventurarse y acompañar a la familia Cabello, para descubrir, en un caótico paseo, por qué nohay nadie en la familia que se pierda el plan al lado del río. Competir sobre neumáticos, clavar desde las piedras,bailar champeta y comer sancocho de gallina. Para que este documental sea completo, no deje de ver El Paseo 7, el paseode olla, y ayude a que la tradición perdure para siempre.",
"formato":"2D",
"duracion":88,
"img_promocional":"https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/6/2/6/1/51626-1-esl-CO/4b445a37e8db-480x670.png",
"precio":12,
"horario":"3:00pm-9:00pm",
"id_genero":1}

{"titulo":"Wonka",
"sinopsis":"Basada en el extraordinario personaje central de Charlie y la Fábrica de Chocolate, el libro infantil más icónico de Roald Dahl y uno de los libros infantiles más vendidos de todos los tiempos, Wonka cuenta la maravillosa historia de cómo el más grande inventor, mago y fabricante de chocolates del mundo se convirtió en el querido Willy Wonka que conocemos hoy en día.",
"formato":"3D",
"duracion":117,
"img_promocional":"https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/5/9/8/5/45895-7-esl-CO/7c81efc87689-warner_wonka_cinecol_480x670.jpg",
"precio":17,
"horario":"6:00pm",
"id_genero":1
}