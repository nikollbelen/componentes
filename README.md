# Visualizador de Modelos 3D

Este proyecto es un visualizador interactivo de modelos 3D que ofrece cuatro vistas diferentes para explorar y interactuar con modelos tridimensionales.

## Estructura del Proyecto

```
├── assets/
│   ├── css/
│   │   ├── variables.css    # Variables CSS globales
│   │   ├── common.css       # Estilos comunes
│   │   ├── carousel.css     # Estilos específicos del carrusel
│   │   ├── cards.css        # Estilos específicos de las tarjetas
│   │   ├── annotations.css  # Estilos específicos de las anotaciones
│   │   └── exploded.css     # Estilos específicos de la vista explosionada
│   └── models/
│       ├── modelo.glb       # Modelo 3D principal
│       ├── C.glb           # Modelo C
│       └── z.glb           # Modelo Z
├── js/
│   ├── carousel.js         # Lógica del carrusel
│   ├── annotations.js      # Lógica de anotaciones
│   └── exploded.js        # Lógica de vista explosionada
├── views/
│   ├── carousel.html      # Vista de carrusel
│   ├── cards.html         # Vista de tarjetas
│   ├── annotations.html   # Vista de anotaciones
│   └── exploded.html      # Vista explosionada
└── index.html            # Página principal
```

## Sistema de Estilos

El proyecto utiliza un sistema de diseño basado en variables CSS para mantener consistencia visual y facilitar la personalización.

### Variables CSS (variables.css)

- **Colores**
  - Variables para colores primarios, secundarios y de acento
  - Gradientes de fondo
  - Colores de texto y estados

- **Efectos Visuales**
  - Configuración de glassmorphism
  - Sombras y bordes
  - Radios de borde

- **Espaciado**
  - Sistema de espaciado consistente (xs, sm, md, lg, xl)
  - Márgenes y padding uniformes

- **Transiciones**
  - Duraciones y timing functions predefinidas

## Vistas Disponibles

### 1. Vista Carrusel
- Navegación entre modelos 3D
- Controles de rotación automática
- Panel de información flotante
- Controles de navegación intuitivos

### 2. Vista de Tarjetas
- Efecto de volteo al hover
- Información en el frente
- Modelo 3D interactivo en el reverso
- Diseño responsivo en grid

### 3. Vista con Anotaciones
- Puntos de interés interactivos
- Tooltips informativos
- Información detallada por componente
- Animaciones suaves

### 4. Vista Explosionada
- Control de separación de componentes
- Lista de partes interactiva
- Animación automática
- Panel de control intuitivo

## Características Principales

- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Efectos Visuales**: Uso consistente de glassmorphism y animaciones
- **Interactividad**: Controles intuitivos y feedback visual
- **Rendimiento**: Carga optimizada de modelos 3D
- **Accesibilidad**: Alto contraste y navegación clara

## Personalización

Para modificar el aspecto visual del proyecto, puedes ajustar las variables en `assets/css/variables.css`:

```css
:root {
    --primary-color: #2196F3;
    --background-gradient-1: #1a237e;
    --background-gradient-2: #311b92;
    --glass-background: rgba(255, 255, 255, 0.15);
    /* ... más variables disponibles */
}
```

## Uso

1. Clona el repositorio
2. Asegúrate de tener los modelos 3D (.glb) en la carpeta `assets/models/`
3. Abre `index.html` en un servidor web
4. Navega entre las diferentes vistas usando los enlaces de la página principal

## Requisitos

- Navegador moderno con soporte para:
  - CSS Grid
  - CSS Variables
  - WebGL
  - Model-viewer component

## Tecnologías Utilizadas

- HTML5
- CSS3 (con efectos glassmorphism)
- JavaScript (ES6+)
- Model Viewer (Google)

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Asegúrate de servir los archivos desde un servidor web (debido a las restricciones CORS con Model Viewer).
   Por ejemplo, usando Python:
```bash
python -m http.server 8000
```

3. Abre el navegador y visita:
```
http://localhost:8000
```

## Uso

### Navegación Principal
- Accede a las diferentes vistas desde la página principal
- Interfaz responsiva que se adapta a 4, 2 o 1 columna según el tamaño de pantalla
- Efectos visuales de glassmorphism y animaciones suaves

### Visor de Carrusel
- Usa las flechas ← → para navegar entre modelos
- Haz clic en los botones de navegación
- El modelo rota automáticamente
- Pasa el mouse sobre los puntos de interés para ver información detallada
- Haz clic en las anotaciones para más detalles

### Tarjetas Flip
- Pasa el mouse sobre las tarjetas para ver el modelo 3D
- Interactúa con el modelo usando el mouse:
  - Clic izquierdo: Rotar
  - Rueda del mouse: Zoom
  - Clic derecho: Pan
- Explora las anotaciones y tooltips para información adicional

### Vista Explosionada
- Usa el deslizador para controlar la separación
- Haz clic en "Animación Automática" para ver el despiece
- Selecciona componentes de la lista para más información
- Pasa el mouse sobre las anotaciones para ver detalles técnicos
- Interactúa con los puntos de interés para información específica

### Vista con Anotaciones
- Navega entre los diferentes puntos de interés
- Haz clic en las anotaciones para ver detalles
- Usa el zoom automático para enfocar detalles específicos
- Explora la información técnica y medidas

## Personalización

### Agregar Nuevos Modelos
1. Coloca el archivo .glb en la carpeta `assets/models/`
2. Actualiza el array `models` en el archivo JavaScript correspondiente
3. Agrega la descripción y configuración necesaria
4. Define las anotaciones y tooltips para el nuevo modelo

### Modificar Estilos
- Los estilos principales están en `assets/css/`
- Cada vista tiene su propio archivo CSS
- `common.css` contiene estilos compartidos y variables

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Tu Nombre - [@tuTwitter](https://twitter.com/tuTwitter) - email@ejemplo.com

Link del Proyecto: [https://github.com/tuusuario/tuproyecto](https://github.com/tuusuario/tuproyecto) 