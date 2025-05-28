document.addEventListener('DOMContentLoaded', function() {
    // Model data
    const models = [
        {
            url: '../assets/models/A.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/z.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/C.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/b.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/C.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
        },
        {
            url: '../assets/models/b.glb',
            description: 'Como se puede observar, los fabricantes ofertan soluciones para casi todas las necesidades que se puedan presentar en el diseño del automatismo neumático. Conviene repasar la gama genérica de actuadores de los principales fabricantes. Puedes interactuar con él usando el mouse para rotar y hacer zoom.'
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