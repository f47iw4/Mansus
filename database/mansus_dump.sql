-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 02-12-2025 a las 19:22:37
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mansus`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_11_18_093200_create_products_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(6, '2025_11_30_142527_add_imagen_to_productos_table', 2),
(7, '2025_12_01_194833_add_role_to_users_table', 3),
(8, '2025_11_28_200000_add_imagen_and_ventas_to_productos_table', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '656038513e0bfeb6106cd10884bb871c69cac81b9a34a04d3bf6e09d66a79625', '[\"*\"]', '2025-12-02 12:14:51', NULL, '2025-12-02 12:14:50', '2025-12-02 12:14:51'),
(2, 'App\\Models\\User', 2, 'auth_token', 'c2b6071e537ba255fad46ee55467c792833090b3fcf77ef57727d78e76e0ed19', '[\"*\"]', '2025-12-02 12:41:06', NULL, '2025-12-02 12:16:28', '2025-12-02 12:41:06'),
(3, 'App\\Models\\User', 1, 'auth_token', '5affce35876b021de585c85b30d405676b632805da28a9377f6bac949df537df', '[\"*\"]', '2025-12-02 13:03:29', NULL, '2025-12-02 12:42:31', '2025-12-02 13:03:29'),
(4, 'App\\Models\\User', 1, 'auth_token', '4f823e29cfdb6acda2640747457d66a3237b799f4c5b9e8711cd6d8ca6ab37e2', '[\"*\"]', '2025-12-02 14:20:07', NULL, '2025-12-02 13:03:41', '2025-12-02 14:20:07'),
(5, 'App\\Models\\User', 3, 'auth_token', '430a41c0752cb0c9d84bdc82ea8cf5e47b8393c3050a10bdb196759860dc1c1a', '[\"*\"]', '2025-12-02 14:27:30', NULL, '2025-12-02 14:20:47', '2025-12-02 14:27:30'),
(6, 'App\\Models\\User', 1, 'auth_token', '899848d64030da06c573699b0fd8e3d4f1b81b8cd391dbf392743b4b557fd1f3', '[\"*\"]', '2025-12-02 14:24:32', NULL, '2025-12-02 14:24:19', '2025-12-02 14:24:32'),
(7, 'App\\Models\\User', 1, 'auth_token', 'c9975054f7abaa165f337e221dcac094b992d2ef3d3938a5cbd4dd1b926bd27a', '[\"*\"]', '2025-12-02 14:24:36', NULL, '2025-12-02 14:24:26', '2025-12-02 14:24:36'),
(8, 'App\\Models\\User', 1, 'auth_token', '79ed9a330592b8f9cbdbf65d03be2e061de7076479b1274cad3faa0e5f1147f9', '[\"*\"]', '2025-12-02 16:48:52', NULL, '2025-12-02 14:24:29', '2025-12-02 16:48:52'),
(9, 'App\\Models\\User', 1, 'auth_token', '816665eeb9e5357f605835b277853066e30408bbd14f1f87a6cc266e9d0263db', '[\"*\"]', '2025-12-02 14:28:04', NULL, '2025-12-02 14:27:39', '2025-12-02 14:28:04'),
(10, 'App\\Models\\User', 1, 'auth_token', '36e2d93508cd95fb545d4f992d3df58454b07b612096bacf19610b523d9ea460', '[\"*\"]', '2025-12-02 14:30:05', NULL, '2025-12-02 14:28:11', '2025-12-02 14:30:05'),
(11, 'App\\Models\\User', 1, 'auth_token', '6ce094fda7c8b60842292b3482a90b1b9a70a3d62c75eb360b63216788210fc3', '[\"*\"]', '2025-12-02 14:30:57', NULL, '2025-12-02 14:30:43', '2025-12-02 14:30:57'),
(12, 'App\\Models\\User', 1, 'auth_token', '0871116d030a68a7ea7b688b0de58d03f7ee770437b9a6e998762fb55fb64c15', '[\"*\"]', '2025-12-02 14:34:21', NULL, '2025-12-02 14:31:04', '2025-12-02 14:34:21'),
(13, 'App\\Models\\User', 1, 'auth_token', 'caafb16fc1a5adbdc7aa419dcd75bed02446948ac187ba8e0ea916ffa54b6e6d', '[\"*\"]', '2025-12-02 14:34:48', NULL, '2025-12-02 14:34:28', '2025-12-02 14:34:48'),
(14, 'App\\Models\\User', 1, 'auth_token', 'c60450f2ecdf6ff71a591f6f6972fe7d2c413109d7028089f79240417e5bd1b1', '[\"*\"]', '2025-12-02 14:42:01', NULL, '2025-12-02 14:40:15', '2025-12-02 14:42:01'),
(15, 'App\\Models\\User', 1, 'auth_token', 'a34fe5f06396f94f68ede83cc93adcd9eea4ff2c16db63edd3dbb127eb1af6c1', '[\"*\"]', '2025-12-02 14:52:44', NULL, '2025-12-02 14:52:17', '2025-12-02 14:52:44'),
(16, 'App\\Models\\User', 1, 'auth_token', '3bea62fd76b0906a3165f46a136168e970c3ef15996fbe249b421eda82cfb49a', '[\"*\"]', '2025-12-02 14:55:53', NULL, '2025-12-02 14:52:52', '2025-12-02 14:55:53'),
(17, 'App\\Models\\User', 1, 'auth_token', '376c9e5e687db12024ae88b70ed074e668fc0794dd4ff04454f437c9800aa8b7', '[\"*\"]', '2025-12-02 15:38:13', NULL, '2025-12-02 14:56:00', '2025-12-02 15:38:13'),
(18, 'App\\Models\\User', 1, 'auth_token', 'b0dd0e4fa676348a5883bb0fe01c0cac3ba8d3f28b9f73999e49247bd62bb2bf', '[\"*\"]', '2025-12-02 15:39:10', NULL, '2025-12-02 15:38:47', '2025-12-02 15:39:10'),
(19, 'App\\Models\\User', 1, 'auth_token', '51696db5277e34b2f7212055cb9a4bdf73e5421f9be02be7deaaf372bb8f745b', '[\"*\"]', '2025-12-02 16:01:24', NULL, '2025-12-02 15:39:17', '2025-12-02 16:01:24'),
(20, 'App\\Models\\User', 4, 'auth_token', '0a9f3fef40e18227f15440285699597cab11bbc5b50577f9b57cd714bb8efe9f', '[\"*\"]', '2025-12-02 16:46:57', NULL, '2025-12-02 16:01:55', '2025-12-02 16:46:57'),
(21, 'App\\Models\\User', 1, 'auth_token', 'b96ff08463c6e380fe9c9e11aa799a629861578e3b1ac26eacde28c6a1488f00', '[\"*\"]', '2025-12-02 17:17:38', NULL, '2025-12-02 16:47:03', '2025-12-02 17:17:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `material` varchar(100) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `ventas` int(11) NOT NULL DEFAULT 0,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `categoria`, `material`, `imagen`, `precio`, `stock`, `ventas`, `activo`, `fecha_creacion`) VALUES
(7, 'Anillo Alejandría', 'Anillo Perla Blanca Alejandría. Anillo ajustable en plata dorada y perla de media bola blanca de 4mm.', 'Anillo', 'Plata', 'images/productos/1764698937_Captura de Pantalla 2025-12-02 a las 19.07.47.png', 38.00, 5, 0, 1, '2025-12-02 17:40:41'),
(8, 'Seamaster Aqua Terra 150M', '41 mm, acero ‑ oro Sedna™ con acero ‑ oro Sedna™', 'Relojes', 'Otro', 'images/productos/1764697856_Captura de Pantalla 2025-12-02 a las 18.50.25.png', 15000.00, 4, 0, 1, '2025-12-02 18:50:56'),
(9, 'Seamaster Aqua Terra 150M', '41 mm, acero con acero', 'Relojes', 'Otro', 'images/productos/1764697973_Captura de Pantalla 2025-12-02 a las 18.51.29.png', 6150.00, 6, 0, 1, '2025-12-02 18:52:53'),
(10, 'Pulsera NATO', 'Piel, marrón', 'Pulsera', 'Otro', 'images/productos/1764698099_Captura de Pantalla 2025-12-02 a las 18.54.46.png', 300.00, 9, 0, 1, '2025-12-02 18:54:59'),
(11, 'Collar Perlas Tahití Grace', 'Collar Perlas 8mm Tahití Grace', 'Collar', 'Plata', 'images/productos/1764698332_Captura de Pantalla 2025-12-02 a las 18.57.49.png', 199.00, 6, 0, 1, '2025-12-02 18:58:52'),
(12, 'Brazalete Dos Perlas Galatea', 'Brazalete rígido 58mm oval en plata, 9mm perlas redondas blancas. Galatea, la colección de joyas realizadas en plata y acero, una declaración de tendencias.', 'Pulsera', 'Plata', 'images/productos/1764698437_Captura de Pantalla 2025-12-02 a las 18.59.46.png', 98.00, 3, 0, 1, '2025-12-02 19:00:37'),
(13, 'Pendientes Gota Dorados Juno', 'Pendientes aro en plata dorada. Perla blanca redonda de 10mm. Autenticidad, Moderna y atemporal, así es la colección Juno.', 'Pendientes', 'Plata bañada', 'images/productos/1764698626_Captura de Pantalla 2025-12-02 a las 19.02.50.png', 109.00, 2, 0, 1, '2025-12-02 19:03:46'),
(14, 'Pulsera rígida Sidi', 'Brazalete rígido en acero, 12mm perlas redondas negras.\r\n\r\nPara esta colección de brazaletes, anillos y pendientes, elaborados en acero de alta calidad y adornados con perlas, cada pieza ha sido creada para combinar la sobriedad del acero con la atemporalidad de las perlas.', 'Pulsera', 'Otro', 'images/productos/1764698794_Captura de Pantalla 2025-12-02 a las 19.05.23.png', 89.00, 3, 0, 1, '2025-12-02 19:06:21'),
(15, 'Pendientes Libre', 'Pendientes botón ancho Ala de plata de ley 925, elaborados con los más altos estándares de calidad para garantizar un brillo inmenso y durabilidad. Tienen una medida de 17 x 11 mm y un cierre a presión. Pertenecen a la colección Esenciales, una selección de pendientes fáciles de llevar y perfectos para el día a día. Ideales para completar cualquier look con elegancia y naturalidad. En la vuelta a la rutina, las joyas adecuadas nos recuerdan que lo cotidiano también puede brillar.', 'Pendientes', 'Plata', 'images/productos/1764699228_Captura de Pantalla 2025-12-02 a las 19.12.27.png', 49.00, 9, 0, 1, '2025-12-02 19:13:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'client',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@mansus.com', 'admin', NULL, '$2y$12$KsoBcAp8Z7hbMWy1.0qR/eINfMQW1Mn.H0MPyJSe2KPs8DQokY6a2', NULL, '2025-12-01 19:54:36', '2025-12-02 10:53:18'),
(2, 'Carlos Laredo', 'cliente1@mail.com', 'client', NULL, '$2y$12$nmM2gr.xWL4mk.tp7T..v.DKRVeouWvup3QH7LGT3jlD6UzSpv.x2', NULL, '2025-12-02 12:16:28', '2025-12-02 12:16:28'),
(3, 'Juan Lopez', 'juan@gmail.com', 'client', NULL, '$2y$12$hrCnsjUqxacTN.1pVNcXOOpagI6ef7G6UxDR6BAL4bXRy.qVkW/eC', NULL, '2025-12-02 14:20:47', '2025-12-02 14:20:47'),
(4, 'Diego Sánchez', 'diegosanch@gmail.com', 'client', NULL, '$2y$12$x2UpwjMpE9me0e5nMaNV3eFN928oDD26kZdT99ZTfewHevaUxshCO', NULL, '2025-12-02 16:01:55', '2025-12-02 16:01:55');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
