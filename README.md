# 💎 DOCUMENTACIÓN DEL PROYECTO TFG: MANSUS

## 1. Descripción del Proyecto
**MANSUS** es una plataforma de comercio electrónico moderna especializada en joyería y relojería exclusiva. Este proyecto destaca por su arquitectura híbrida y su sistema de seguridad avanzado, diseñado para separar las responsabilidades operativas y administrativas.

### Características Principales 

*   **Arquitectura Híbrida:**
    *   **Frontend (Cliente & Supervisor):** SPA (Single Page Application) construida con **React, Vite, TailwindCSS**. Ofrece una experiencia de usuario fluida, transiciones animadas y carga instantánea.
    *   **Backend (Administración):** Panel clásico renderizado en servidor (**Laravel Blade**) para garantizar la máxima estabilidad y seguridad en las operaciones de base de datos.

*   **Sistema de Roles Dual y Seguridad:**
    *   **Rol Supervisor:** Panel moderno con gráficos en tiempo real para monitorizar ventas y stock. Acceso de "solo lectura" a métricas críticas.
    *   **Rol Administrador:** Panel exclusivo para gestión de inventario (CRUD). Protegido con doble verificación (Middleware de servidor + Validación de cliente).
    *   **Redirección Inteligente:** El sistema detecta el rol al iniciar sesión y redirige al panel correspondiente (Blade o React) automáticamente.

*   **Validaciones de Negocio Estrictas:**
    *   Control de precios y stock positivo (no se permiten valores ≤ 0).
    *   Sistema de alertas visuales preventivas antes de enviar formularios incorrectos.

*   **Catalogo Interactivo:**
    *   Filtrado por categorías (pendientes, relojes, pulseras).
    *   Carrito de compras dinámico.

---

## 2. Configuración de Base de Datos

El proyecto incluye un archivo `mansus.sql` con la estructura y datos iniciales.

### Importar en phpMyAdmin:

1.  Abrir **phpMyAdmin** (normalmente en `http://localhost/phpmyadmin` o a través de XAMPP/MAMP).
2.  Crear una **Nueva Base de Datos**:
    *   Nombre: `mansus`.
    *   Cotejamiento: `utf8mb4_unicode_ci`.
3.  Seleccionar la base de datos creada en el panel izquierdo.
4.  Ir a la pestaña **Importar** (arriba).
5.  Hacer clic en "Seleccionar archivo" y buscar el archivo `mansus.sql` en la carpeta raíz de tu proyecto (o donde lo tengas guardado).
6.  Hacer clic en **Importar** (abajo del todo).
7.  Verificar que las tablas (`users`, `productos`, etc.) se han creado correctamente.

---

## 3. Instalación y Configuración (Pre-Despliegue)

Preparar el entorno antes de desplegar localmente: abrir una terminal en la carpeta del proyecto y ejecutar estos comandos en orden:

### Paso 1: Dependencias de Backend (Laravel)
Instala las librerías de PHP necesarias:
```bash
composer install
```

### Paso 2: Configuración de Entorno (.env)
Si no se dispone del archivo `.env`, duplicar el de ejemplo:
```bash
cp .env.example .env
```
Abrir el archivo `.env` y configurar la base de datos:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mansus  <-- El nombre debe coincidir en phpMyAdmin
DB_USERNAME=root    <-- El usuario de BD
DB_PASSWORD=        <-- La contraseña (vacío si no se ha configurado)
```

### Paso 3: Generar Clave de Aplicación
```bash
php artisan key:generate
```

### Paso 4: Enlace Simbólico para Imágenes
Para que las imágenes de los productos sean visibles:
```bash
php artisan storage:link
```

### Paso 5: Dependencias de Frontend (React)
Instala las librerías de JavaScript:
```bash
npm install
```

---

## 4. Despliegue Local

Para ejecutar el proyecto, necesitarás **dos terminales** abiertas simultáneamente:

### Terminal 1: Servidor Laravel (Backend)
Este comando arranca el servidor API y el panel de administración Blade:
```bash
php artisan serve
```
*El backend estará disponible en: `http://127.0.0.1:8000`*

### Terminal 2: Servidor Vite (Frontend React)
Este comando compila los assets y arranca el servidor de desarrollo para la parte de React:
```bash
npm run dev
```

---

## 5. Credenciales de Acceso para Pruebas

| Rol | Email | Contraseña | Acceso Principal |
| :--- | :--- | :--- | :--- |
| **Administrador** | `admin@mansus.com` | `admin123` | Panel Gestión (Blade) |
| **Supervisor** | `supervisor@mansus.com` | `super123` | Dashboard Ventas (React) |
| **Cliente** | `ana@test.com` | `cliente123` | Tienda Pública |

