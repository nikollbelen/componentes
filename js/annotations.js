document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('#annotated-model');
    const hotspots = document.querySelectorAll('.hotspot');

    // Disable auto-rotate when interacting with hotspots
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', () => {
            modelViewer.autoRotate = false;
        });

        hotspot.addEventListener('mouseleave', () => {
            setTimeout(() => {
                modelViewer.autoRotate = true;
            }, 1000);
        });
    });

    // Update annotation positions based on screen size
    function updateAnnotationPositions() {
        hotspots.forEach(hotspot => {
            const annotation = hotspot.querySelector('.annotation');
            const rect = hotspot.getBoundingClientRect();
            
            // Check if annotation would go off-screen to the right
            if (rect.right + 260 > window.innerWidth) {
                annotation.style.transform = 'translate(-265px, -50%)';
            } else {
                annotation.style.transform = 'translate(25px, -50%)';
            }
        });
    }

    // Update positions on window resize
    window.addEventListener('resize', updateAnnotationPositions);
    
    // Initial position update
    setTimeout(updateAnnotationPositions, 1000);

    // Optional: Add keyboard navigation for hotspots
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const activeHotspot = document.activeElement;
            const isHotspot = activeHotspot.classList.contains('hotspot');
            
            if (!isHotspot) {
                hotspots[0].focus();
            } else {
                const currentIndex = Array.from(hotspots).indexOf(activeHotspot);
                const nextIndex = (currentIndex + 1) % hotspots.length;
                hotspots[nextIndex].focus();
            }
        }
    });
});