# Visualizador de Modelos 3D

Este proyecto es un visualizador interactivo de modelos 3D que incluye cuatro vistas diferentes:
1. Visor de Carrusel
2. Visor con Tarjetas Flip
3. Visor con Vista Explosionada
4. Visor con Anotaciones

## Estructura del Proyecto

```
├── assets/
│   ├── models/         # Modelos 3D
│   │   ├── modelo.glb
│   │   ├── C.glb
│   │   └── z.glb
│   └── css/           # Estilos
│       ├── common.css     # Estilos compartidos y variables
│       ├── carousel.css   # Estilos del carrusel
│       ├── cards.css      # Estilos de las tarjetas
│       ├── exploded.css   # Estilos vista explosionada
│       └── annotations.css # Estilos de anotaciones
├── js/                # Scripts
│   ├── carousel.js       # Lógica del carrusel
│   ├── cards.js         # Lógica de tarjetas
│   ├── exploded.js      # Lógica vista explosionada
│   └── annotations.js    # Lógica de anotaciones
├── views/             # Vistas HTML
│   ├── carousel.html     # Vista de carrusel
│   ├── cards.html       # Vista de tarjetas
│   ├── exploded.html    # Vista explosionada
│   └── annotations.html  # Vista de anotaciones
├── index.html         # Página principal
└── README.md         # Documentación
```

## Características

### 1. Visor de Carrusel (carousel.html)
- Navegación entre modelos con botones y teclado
- Rotación automática de modelos
- Descripción flotante para cada modelo
- Anotaciones interactivas sobre partes específicas
- Tooltips informativos al pasar el mouse

### 2. Visor con Tarjetas Flip (cards.html)
- Efecto de volteo al pasar el mouse
- Modelo 3D en la parte posterior
- Descripción en la parte frontal
- Diseño responsivo
- Tooltips con información detallada
- Anotaciones sobre características clave

### 3. Vista Explosionada (exploded.html)
- Control de separación de piezas
- Animación automática de despiece
- Lista de componentes interactiva
- Tooltips informativos
- Anotaciones detalladas sobre cada componente
- Puntos de interés con información contextual

### 4. Vista con Anotaciones (annotations.html)
- Anotaciones detalladas sobre el modelo
- Puntos de interés interactivos
- Información técnica y medidas
- Tooltips informativos
- Navegación entre puntos de interés
- Zoom automático a detalles

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