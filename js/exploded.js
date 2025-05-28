document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('#exploded-model');
    const slider = document.querySelector('#explosion-slider');
    const resetBtn = document.querySelector('#reset-view');
    const autoExplodeBtn = document.querySelector('#auto-explode');
    const partsMenu = document.querySelector('#parts-menu');
    const tooltip = document.querySelector('#part-tooltip');

    // Modelo y sus partes (ajusta según tu modelo)
    const parts = [
        { name: 'Parte Superior', description: 'Componente principal superior del modelo' },
        { name: 'Sección Media', description: 'Sección central con elementos de conexión' },
        { name: 'Base', description: 'Base y soporte del modelo' },
        // Agrega más partes según tu modelo
    ];

    // Crear lista de partes
    parts.forEach((part, index) => {
        const li = document.createElement('li');
        li.className = 'part-item';
        li.textContent = part.name;
        li.addEventListener('mouseenter', () => showTooltip(event, part));
        li.addEventListener('mouseleave', hideTooltip);
        li.addEventListener('click', () => highlightPart(index));
        partsMenu.appendChild(li);
    });

    // Control del despiece con el slider
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        explodeModel(value);
    });

    // Función para separar el modelo
    function explodeModel(value) {
        const scale = value / 100; // Convertir a escala 0-1
        
        // Aplicar transformación a cada parte del modelo
        // Ajusta estas transformaciones según la estructura de tu modelo
        modelViewer.querySelector('#parte1')?.setAttribute('transform', `translate(0 ${scale * 50} 0)`);
        modelViewer.querySelector('#parte2')?.setAttribute('transform', `translate(${scale * 50} 0 0)`);
        modelViewer.querySelector('#parte3')?.setAttribute('transform', `translate(0 ${-scale * 50} 0)`);
    }

    // Restablecer vista
    resetBtn.addEventListener('click', () => {
        slider.value = 0;
        explodeModel(0);
        modelViewer.cameraOrbit = '-30deg 75deg 105%';
        modelViewer.cameraTarget = '0 0 0';
        modelViewer.fieldOfView = '45deg';
    });

    // Animación automática
    let animationInterval;
    autoExplodeBtn.addEventListener('click', () => {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
            autoExplodeBtn.textContent = 'Animación Automática';
            return;
        }

        let value = parseInt(slider.value);
        const increment = 1;
        autoExplodeBtn.textContent = 'Detener Animación';

        animationInterval = setInterval(() => {
            if (value >= 100) {
                value = 0;
            } else {
                value += increment;
            }
            slider.value = value;
            explodeModel(value);
        }, 50);
    });

    // Funciones para tooltips
    function showTooltip(event, part) {
        const rect = event.target.getBoundingClientRect();
        tooltip.style.display = 'block';
        tooltip.style.left = `${rect.right + 10}px`;
        tooltip.style.top = `${rect.top}px`;
        tooltip.querySelector('h3').textContent = part.name;
        tooltip.querySelector('p').textContent = part.description;
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    // Resaltar parte seleccionada
    function highlightPart(index) {
        const items = partsMenu.querySelectorAll('.part-item');
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
        
        // Aquí puedes agregar lógica para resaltar la parte en el modelo 3D
        // Por ejemplo, cambiar el color o la opacidad de las otras partes
    }

    // Manejar eventos de carga del modelo
    modelViewer.addEventListener('load', () => {
        // Inicializar el modelo
        explodeModel(0);
    });

    // Opcional: Detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', () => {
        // Actualizar posiciones si es necesario
    });
});