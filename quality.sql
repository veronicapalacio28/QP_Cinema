-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2024 a las 18:52:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
-- --------------------------------------------------------
-- Base de datos: `quality`
CREATE DATABASE quality;
USE quality;
-- --------------------------------------------------------
-- Estructura de tabla para la tabla genero
CREATE TABLE `genero` (
  `id_genero` int(11) NOT NULL,
  `genero` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla genero
INSERT INTO `genero` (`id_genero`, `genero`) VALUES
(1, 'Accion'),
(2, 'Aventura'),
(3, 'Comedia'),
(4, 'Ciencia Ficcion'),
(5, 'Animacion'),
(6, 'Drama'),
(7, 'Documentales'),
(8, 'Fantasia'),
(9, 'Terror');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla pelicula
CREATE TABLE `pelicula` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `sinopsis` text NOT NULL,
  `formato` varchar(4) NOT NULL,
  `duracion` int(11) NOT NULL,
  `img_promocional` varchar(2000) NOT NULL,
  `precio` int(11) NOT NULL,
    `horario` text NOT NULL,
  `id_genero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla pelicula
INSERT INTO `pelicula` (`id`, `titulo`, `sinopsis`, `formato`, `duracion`, `img_promocional`, `precio`,`horario` ,`id_genero`) VALUES
(1, 'Fast X', 'Comienza el final del camino. A lo largo de muchas misiones y contra cualquier adversidad, Dom Toretto (Vin Diesel) y su familia han sido más inteligentes, más astutos y más rápidos que todos los enemigos que se cruzan en su camino. Ahora, se enfrentan al oponente más letal al que se han enfrentado jamás: Una amenaza aterradora que surge de las sombras del pasado.', '3D', 141, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3P9QvWVN02Etn4kYGC702WVoXEb.jpg', 15,'12:00pm-6:00pm','1'),
(2, 'Transformers: El Despertar de las Bestias','Regresando a la acción y espectáculo que han capturado a los amantes del cine alrededor del mundo, Transformers: El Despertar de las Bestias transportará a las audiencias a una aventura mundial de los 90s con los Autobots, y traerá a una nueva facción de Transformers, los Maximals.', '3D', '117', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yu24fXpro7jx4XFlgEWwElW1kgW.jpg', 15,'3:00pm-9:00pm','4'),
(3, 'Flash', 'Los mundos chocan en Flash cuando Barry utiliza sus superpoderes para viajar en el tiempo y cambiar los acontecimientos del pasado. Barry intenta salvar a su familia, pero sin saberlo altera el futuro y queda atrapado en una realidad en la que el general Zod ha regresado y amenaza con la aniquilación, pero en la que no hay Superhéroes a los que recurrir.', '3D', '144', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x9Qc86JEyYkAKsdzjDpS5kbaAB7.jpg', 18,'12:00pm-6:00pm','1'),
(4, 'Elementos', 'ELEMENTOS es la nueva pelicula de Disney y Pixar, ambientado en Elemental City, donde conviven los habitantes del fuego, el agua, la tierra y el aire. La historia nos presenta a Ember, una joven dura, ingeniosa y feroz, cuya amistad con un chico divertido y que se deja llevar por la corriente, llamado Wade, desafía sus creencias sobre el mundo en el que viven.', '2D', '110', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qMcmZ4bsobOCv210dMUUFnSOD3m.jpg', 14,'3:00pm-9:00pm','5'),
(5, 'Hazme el Favor', 'A punto de perder su casa de la infancia, Maddie (Lawrence) descubre una oferta de trabajo interesante: padres adinerados y sobreprotectores buscan a alguien para que salga con su hijo introvertido de 19 años, Percy, antes de que se vaya a la universidad. Para su sorpresa, Maddie descubre que el tímido Percy no será tan fácil.', '2D', '100', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/9/1/2/42197-2-esl-CO/d537232dcecb-480x670.jpg', 14,'12:00pm-6:00pm','3'),
(6, 'Indiana Jones y el Dial del Destino', 'Al encontrarse en una nueva era, a punto de jubilarse, Indy lucha por encajar en un mundo que parece habérsele quedado pequeño. Pero cuando los tentáculos de un mal demasiado familiar regresan en la forma de un viejo rival, Indy debe ponerse su sombrero y coger su látigo una vez más para asegurarse de que un antiguo y poderoso artefacto no caiga en las manos equivocadas.', '3D', '154', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Sj5ubQ0BLXd6JuECq52Ira8Oor.jpg', 20,'3:00pm-9:00pm','2'),
(7, 'La Noche del Demonio: La Puerta Roja', 'En La Noche del Demonio: La Puerta Roja, el reparto original del clásico de terror vuelve para el capítulo final de la saga aterradora de la familia Lambert. Para acabar con sus demonios de una vez por todas, Josh (Patrick Wilson) y un Dalton en edad universidaria (Ty simpkins) deben adentrarse más en el purgatorio que nunca antes, enfrentándose al pasado oscuro de su familia.', '2D', '107', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/9/0/2/42095-6-esl-CO/7d2110f2dda7-ins5-2-poster-preventa.jpg', 15,'12:00pm-6:00pm','9'),
(8, 'Misión Imposible: Sentencia Moral Parte Uno', 'En Misión Imposible: Sentencia Mortal Parte 1, Ethan Hunt (Tom Cruise) y su equipo IMF se embarcan en su misión más peligrosa hasta el momento: Rastrear un arma nueva y aterradora que amenaza a toda la humanidad antes de que caiga en las manos equivocadas.', '2D', '135', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/1/8/2/42811-1-esl-CO/f9bc22c149b2-480x670.jpg', 16,'3:00pm-9:00pm','1'),
(9, 'Demonio Negro', 'Mientras Paul Sturges se va de vacaciones a Bahía Azul con su familia, desde las profundidades del mar se eleva un enorme megalodón conocido solo por su nombre: El Demonio Negro.', '3D', '100', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/5/0/3/43057-1-esl-CO/bab1aa2358dd-tbd_cineco_pstr-dskp_480x670.jpg', 18,'12:00pm-6:00pm','9'),
(10, 'La Criatura del Lago', 'Un monstruo gigantesco y sanguinario emerge de un lago tras el robo de su huevo y desata su furia sobre los habitantes de un pueblo, dejando un rastro de destrucción y muerte a su paso. La ciudad de Bueng Kan, ahora aislada del mundo exterior, debe movilizar a sus funcionarios y ciudadanos, así como a un grupo de científicos que se encuentran en la ciudad realizando investigaciones, para atrapar a este depredador antes de que sea demasiado tarde.', '3D', '104', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/7/3/0/40371-1-esl-CO/fecec796e911-poster_480x670.png', 17,'3:00pm-9:00pm','4'),
(11, 'Escape Bajo Fuego', 'Tom Harris (Gerard Butler) un agente encubierto de la CIA que trabaja en Oriente Medio  se verá en peligro a causa de la filtración de su misión encubierta que revelará su verdadera identidad. Atrapado en pleno territorio enemigo, Harris y su traductor tendrán que abrirse paso en una explosiva persecución a través del desierto para llegar a Kandahar, donde les espera su punto de extracción.', '2D', '120', 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/2/1/3/43125-1-esl-CO/544ecc00ef76-kdhr_pstr-dskp_480x670.png', 14,'12:00pm-6:00pm','1'),
(12, 'La Sirenita', 'La más joven de las hijas del rey Tritón y la más rebelde, sueña con conocer el mundo más allá del mar y, mientras visita la superficie, se enamora del distinguido príncipe Eric. Aunque las sirenas tienen prohibido relacionarse con los humanos, Ariel debe seguir su corazón.', '2D', '135', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mdszPVnIY7cWgbgJ8zbwu1PiU5V.jpg', 12,'3:00pm-9:00pm','8');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla usuario
CREATE TABLE `usuario` (
  `identificacion` int(11) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `FK_idtipo` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla usuario
INSERT INTO `usuario` (`identificacion`, `rol`, `FK_idtipo`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES
(12345678, '1', 1, 'Juan', 'Pérez', 'juan.perez@example.com', '$2b$10$9qzuxTL1P7rBjNcozc2KY.RJTrz9JAL7taSThKaPzWwoynlbmsTYO'),
(987654321, '1', 1, 'Juan', 'Pérez', 'juan.perez2@example.com', '$2b$10$P1t.IFz84xjG/qfkSiqT5uvW2IYOlaR.T4SkzZoX0jddJeonU6aB.'),
(1234567890, '2', 1, 'Veronica', 'Palacio', 'veronica@gmail.com', '$2b$10$lzqS7SXK7WyWvKiDdx1ZH.PMiaV/REEM3axkWK3p3JLYOnHrTR7Om');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla tipo_documento
CREATE TABLE `tipo_documento` (
  `id_tipo` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla tipo_documento
INSERT INTO `tipo_documento` (`id_tipo`, `tipo`) VALUES
(1, 'Cedula de ciudadania'),
(2, 'Tarjeta de identidad');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla sala
CREATE TABLE `sala` (
  `id_sala` int(11) NOT NULL,
  `FK_idsilla` int(11) DEFAULT NULL,
  `nombre_sala` varchar(10) DEFAULT NULL,
  `cantidad_asientos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla sala
INSERT INTO `sala` (`id_sala`, `nombre_sala`,`cantidad_asientos`) VALUES
(1, 'Sala 1','16'),
(2, 'Sala 2','16'),
(3, 'Sala 3','16'),
(4, 'Sala 4','16'),
(5, 'Sala 5','16'),
(6, 'Sala 6','16');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla silla
CREATE TABLE `silla` (
  `id_silla` int(11) NOT NULL,
  `nombre_silla` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla silla
INSERT INTO `silla` (`id_silla`, `nombre_silla`) VALUES
(1, 'A1'),
(2, 'A2'),
(3, 'A3'),
(4, 'A4'),
(5, 'B1'),
(6, 'B2'),
(7, 'B3'),
(8, 'B4'),
(9, 'C1'),
(10, 'C2'),
(11, 'C3'),
(12, 'C4'),
(13, 'D1'),
(14, 'D2'),
(15, 'D3'),
(16, 'D4');
-- --------------------------------------------------------
-- Estructura de tabla para la tabla reserva
CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `FK_identificacion` int(11) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `FK_idpelicula` int(11) DEFAULT NULL,
  `FK_idsala` int(11) DEFAULT NULL,
  `id_silla` int(11) DEFAULT NULL,
  `horario` varchar(20) DEFAULT NULL,
  `estado` int(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Volcado de datos para la tabla reserva
-- --------------------------------------------------------
--
-- Indices para tablas volcadas
--
-- Indices de la tabla genero
ALTER TABLE `genero` ADD PRIMARY KEY (`id_genero`);
-- Indices de la tabla pelicula
ALTER TABLE `pelicula` ADD PRIMARY KEY (`id`);
-- Indices de la tabla usuario
ALTER TABLE `usuario` ADD PRIMARY KEY (`identificacion`), ADD UNIQUE KEY `IDX_349ecb64acc4355db443ca17cb` (`correo`), ADD KEY `FK_7547e45d9640c110375a724600e` (`FK_idtipo`);
-- Indices de la tabla tipo_documento
ALTER TABLE `tipo_documento` ADD PRIMARY KEY (`id_tipo`);
-- Indices de la tabla sala
ALTER TABLE `sala` ADD PRIMARY KEY (`id_sala`);
-- Indices de la tabla silla
ALTER TABLE `silla` ADD PRIMARY KEY (`id_silla`);
-- Indices de la tabla reserva
ALTER TABLE `reserva` ADD PRIMARY KEY (`id_reserva`), ADD KEY `fkusuario` (`FK_identificacion`), ADD KEY `fkpelicula` (`FK_idpelicula`), ADD KEY `fksala` (`FK_idsala`);
-- --------------------------------------------------------
--
-- AUTO_INCREMENT de las tablas volcadas
--
-- AUTO_INCREMENT de la tabla pelicula
ALTER TABLE `pelicula`MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
-- AUTO_INCREMENT de la tabla usuario
ALTER TABLE `usuario` MODIFY `identificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=987654322;
-- AUTO_INCREMENT de la tabla tipo_documento
ALTER TABLE `tipo_documento` MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- AUTO_INCREMENT de la tabla sala
ALTER TABLE `sala`;
-- AUTO_INCREMENT de la tabla reserva
ALTER TABLE `reserva` MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT;
-- --------------------------------------------------------
--
-- Restricciones para tablas volcadas
--
ALTER TABLE `usuario` ADD CONSTRAINT `FK_7547e45d9640c110375a724600e` FOREIGN KEY (`FK_idtipo`) REFERENCES `tipo_documento` (`id_tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION; COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

SELECT * FROM reserva;
SELECT * FROM usuario;