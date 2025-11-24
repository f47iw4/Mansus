-- ======================================================
--  CREACIÓN DE TABLAS - tiendaOnline
-- ======================================================

-- (para rehacer la estructura)
DROP TABLE IF EXISTS 
    Pagos, 
    Pedido_Producto, 
    Carrito_Producto, 
    Pedidos, 
    Direcciones, 
    Productos, 
    Carritos, 
    Usuarios;

-- ======================================================
-- 1. TABLA USUARIO
-- ======================================================
CREATE TABLE Usuarios (
    id_usuario       INT AUTO_INCREMENT PRIMARY KEY,
    nombre           VARCHAR(100) NOT NULL,
    email            VARCHAR(150) UNIQUE NOT NULL,
    fecha_registro   DATE NOT NULL,
    nif              VARCHAR(15) UNIQUE
);

-- ======================================================
-- 2. TABLA CARRITO
-- ======================================================
CREATE TABLE Carritos (
    id_carrito       INT AUTO_INCREMENT PRIMARY KEY,
    fecha_creacion   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_usuario       INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- ======================================================
-- 3. TABLA DIRECCIÓN
-- ======================================================
CREATE TABLE Direcciones (
    id_direccion     INT AUTO_INCREMENT PRIMARY KEY,
    pais             VARCHAR(50) NOT NULL,
    codigo_postal    VARCHAR(10) NOT NULL,
    provincia        VARCHAR(100),
    ciudad           VARCHAR(100),
    calle            VARCHAR(150),
    id_usuario       INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ======================================================
-- 4. TABLA PRODUCTO
-- ======================================================
CREATE TABLE Productos (
    id_producto      INT AUTO_INCREMENT PRIMARY KEY,
    nombre           VARCHAR(150) NOT NULL,
    descripcion      TEXT,
    categoria        VARCHAR(100),
    material         VARCHAR(100),
    precio           DECIMAL(10,2) NOT NULL,
    stock            INT DEFAULT 0,
    activo           BOOLEAN DEFAULT TRUE,
    fecha_creacion   DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ======================================================
-- 5. TABLA PEDIDO
-- ======================================================
CREATE TABLE Pedidos (
    id_pedido        INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario       INT NOT NULL,
    id_direccion     INT,
    total_pedido     DECIMAL(10,2) DEFAULT 0.00,
    estado           VARCHAR(50) DEFAULT 'pendiente',
    fecha_pedido     DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_direccion) REFERENCES Direcciones(id_direccion)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- ======================================================
-- 6. TABLA PAGO
-- ======================================================
CREATE TABLE Pagos (
    id_pago          INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido        INT UNIQUE,
    metodo_pago      VARCHAR(50) NOT NULL,
    total_pagado     DECIMAL(10,2) NOT NULL,
    fecha_pago       DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ======================================================
-- 7. TABLA INTER: CARRITO_PRODUCTO (N:M)
-- ======================================================
CREATE TABLE Carrito_Producto (
    id_carrito       INT,
    id_producto      INT,
    cantidad         INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id_carrito, id_producto),
    FOREIGN KEY (id_carrito) REFERENCES Carritos(id_carrito)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ======================================================
-- 8. TABLA INTER: PEDIDO_PRODUCTO (N:M)
-- ======================================================
CREATE TABLE Pedido_Producto (
    id_pedido        INT,
    id_producto      INT,
    cantidad         INT NOT NULL DEFAULT 1,
    precio_unitario  DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ======================================================
-- DATOS DE PRUEBA - PRODUCTOS
-- ======================================================
INSERT INTO Productos (nombre, descripcion, categoria, material, precio, stock, activo) VALUES
('Anillo Solitario Diamante', 'Elegante anillo con diamante de 1 quilate', 'Anillos', 'Oro blanco 18K', 2500.00, 5, TRUE),
('Collar Perlas Akoya', 'Collar de perlas naturales japonesas', 'Collares', 'Perlas Akoya', 1800.00, 8, TRUE),
('Pulsera Tennis Diamantes', 'Pulsera con diamantes engarzados', 'Pulseras', 'Oro blanco 18K', 3200.00, 3, TRUE),
('Pendientes Esmeralda', 'Pendientes con esmeraldas colombianas', 'Pendientes', 'Platino', 4500.00, 2, TRUE),
('Anillo Compromiso Zafiro', 'Anillo con zafiro azul central', 'Anillos', 'Oro amarillo 18K', 2800.00, 4, TRUE),
('Reloj Omega Seamaster', 'Reloj automático sumergible 300m', 'Relojes', 'Acero inoxidable', 5200.00, 6, TRUE),
('Collar Cadena Oro', 'Cadena de oro macizo estilo barbada', 'Collares', 'Oro amarillo 18K', 980.00, 12, TRUE),
('Pulsera Cuero Trenzada', 'Pulsera artesanal de cuero genuino', 'Pulseras', 'Cuero', 85.00, 25, TRUE),
('Anillo Eternidad', 'Anillo con diamantes alrededor', 'Anillos', 'Platino', 3600.00, 5, TRUE),
('Reloj Cartier Tank', 'Reloj clásico rectangular', 'Relojes', 'Oro rosa 18K', 8900.00, 2, TRUE);

-- ======================================================
-- FIN SCRIPT
-- ======================================================
