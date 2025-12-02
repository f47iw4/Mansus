# Accesibilidad y Usabilidad - Mansus

## Medidas de Accesibilidad Implementadas

### 1. **Semántica HTML**
- Uso de etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<footer>`
- Estructura jerárquica de encabezados (h1-h6)
- Formularios con labels asociados

### 2. **Navegación por Teclado**
- Todos los elementos interactivos accesibles con Tab
- Focus visible en elementos activos
- Skip links para navegación rápida

### 3. **Contraste de Colores**
- Ratio mínimo 4.5:1 para texto normal
- Ratio mínimo 3:1 para texto grande
- Paleta de colores accesible

### 4. **Imágenes**
- Atributos `alt` descriptivos en todas las imágenes
- Imágenes decorativas con `alt=""`
- Lazy loading para optimización

### 5. **Formularios**
- Labels explícitos para todos los inputs
- Mensajes de error claros y descriptivos
- Validación en tiempo real
- Indicadores de campos requeridos

## Medidas de Usabilidad

### 1. **Diseño Responsive**
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Navegación adaptativa

### 2. **Feedback Visual**
- Estados hover en botones y links
- Loading states durante operaciones
- Mensajes de éxito/error claros
- Animaciones suaves (transitions)

### 3. **Navegación Intuitiva**
- Menú principal siempre visible
- Breadcrumbs en páginas internas
- Búsqueda accesible
- Filtros claros en catálogo

### 4. **Performance**
- Lazy loading de imágenes
- Code splitting en React
- Caché de assets
- Optimización de consultas BD

### 5. **Consistencia**
- Diseño coherente en todas las páginas
- Terminología consistente
- Patrones de interacción predecibles

## Checklist de Accesibilidad

- [x] HTML semántico
- [x] Labels en formularios
- [x] Navegación por teclado
- [x] Contraste de colores adecuado
- [ ] Atributos ARIA (pendiente mejorar)
- [x] Alt text en imágenes
- [x] Responsive design
- [x] Mensajes de error descriptivos

## Herramientas de Validación Utilizadas

1. **Lighthouse** (Chrome DevTools)
2. **WAVE** (Web Accessibility Evaluation Tool)
3. **axe DevTools**
4. **Responsive Design Checker**

## Mejoras Futuras

1. Implementar más atributos ARIA
2. Añadir modo de alto contraste
3. Soporte para lectores de pantalla mejorado
4. Internacionalización (i18n)
5. Modo oscuro
