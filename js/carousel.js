document.addEventListener('DOMContentLoaded', function() {
    // Model data
    const models = [
        {
            url: '../assets/models/modelo.glb',
            description: 'Este es el primer modelo 3D. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/C.glb',
            description: 'Segundo modelo 3D. Explora los detalles usando los controles de cámara.'
        },
        {
            url: '../assets/models/z.glb',
            description: 'Tercer modelo 3D. Puedes usar AR para ver este modelo en tu espacio real.'
        }
    ];

    let currentModelIndex = 0;
    const modelViewer = document.querySelector('model-viewer');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Update model function
    function updateModel(index) {
        const model = models[index];
        modelViewer.src = model.url;
        updateModelInfo(index);
    }

    // Update model description
    function updateModelInfo(index) {
        const description = document.querySelector('.model-description');
        description.textContent = models[index].description;
    }

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        currentModelIndex = (currentModelIndex - 1 + models.length) % models.length;
        updateModel(currentModelIndex);
    });

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        currentModelIndex = (currentModelIndex + 1) % models.length;
        updateModel(currentModelIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Initial load
    updateModel(currentModelIndex);
});