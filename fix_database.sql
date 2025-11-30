-- Script SQL para arreglar la base de datos tienda_joyas
-- Ejecuta esto en phpMyAdmin (http://localhost/phpmyadmin)

USE tienda_joyas;

-- Agregar columnas imagen y ventas si no existen
ALTER TABLE productos 
ADD COLUMN IF NOT EXISTS imagen LONGTEXT NULL AFTER stock,
ADD COLUMN IF NOT EXISTS ventas INT DEFAULT 0 AFTER stock;

-- Insertar productos de prueba con imágenes
INSERT INTO productos (nombre, descripcion, categoria, material, precio, stock, activo, ventas, imagen, fecha_creacion) VALUES
('Collar de Diamantes Eterno', 'Elegante collar de oro blanco de 18k con diamantes naturales. Diseño atemporal que combina con cualquier ocasión.', 'Collar', 'Oro', 2499.99, 5, 1, 45, 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=400', NOW()),
('Anillo Solitario Brillante', 'Anillo de compromiso con diamante solitario de 1 quilate. Engaste clásico en oro blanco.', 'Anillo', 'Oro', 3999.99, 3, 1, 67, 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400', NOW()),
('Pendientes Perla Cultivada', 'Pendientes de perlas cultivadas de agua dulce con cierre de oro amarillo de 14k.', 'Pendientes', 'Oro', 899.99, 12, 1, 89, 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400', NOW()),
('Pulsera Eslabones Plata', 'Pulsera de eslabones en plata de ley 925. Diseño minimalista y moderno.', 'Pulsera', 'Plata', 299.99, 20, 1, 123, 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400', NOW()),
('Collar Cadena Oro Rosa', 'Delicada cadena de oro rosa de 18k. Perfecta para uso diario o especial.', 'Collar', 'Oro', 1299.99, 8, 1, 56, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400', NOW()),
('Anillo Banda Minimalista', 'Anillo de banda ancha en plata bañada en oro. Estilo contemporáneo.', 'Anillo', 'Plata bañada', 199.99, 25, 1, 34, 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=400', NOW()),
('Pendientes Aro Grande', 'Pendientes tipo aro en oro amarillo de 14k. Diseño clásico que nunca pasa de moda.', 'Pendientes', 'Oro', 599.99, 15, 1, 78, 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=400', NOW()),
('Pulsera Charm Personalizable', 'Pulsera de plata con charms intercambiables. Crea tu propia historia.', 'Pulsera', 'Plata', 449.99, 10, 1, 92, 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=400', NOW()),
('Collar Gargantilla Moderna', 'Gargantilla ajustable en oro blanco con detalle de circonita.', 'Collar', 'Oro', 799.99, 7, 1, 41, 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400', NOW()),
('Anillo Vintage Esmeralda', 'Anillo vintage con esmeralda natural y detalles de diamantes. Pieza única.', 'Anillo', 'Oro', 4599.99, 2, 1, 12, 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=400', NOW()),
('Pendientes Botón Diamante', 'Pendientes tipo botón con diamantes de 0.5 quilates cada uno. Elegancia pura.', 'Pendientes', 'Oro', 1899.99, 6, 1, 58, 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=400', NOW()),
('Pulsera Tenis Diamantes', 'Pulsera tipo tenis con diamantes engastados. Lujo y sofisticación.', 'Pulsera', 'Oro', 5999.99, 4, 1, 23, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400', NOW())
ON DUPLICATE KEY UPDATE nombre=nombre;

-- Verificar que todo se insertó correctamente
SELECT COUNT(*) as total_productos FROM productos;
SELECT * FROM productos ORDER BY ventas DESC LIMIT 5;
