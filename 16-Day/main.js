const {body} = document;
let ZoomActived = false;

window.addEventListener('click', () => {
    ZoomActived = !ZoomActived;
});

window.addEventListener('mousemove', (e) => {
    const {clientX: x, clientY: y} = e;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (ZoomActived) {
            img.style.transform = 'scale(2)';
            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transition = 'transform 0.3s ease-in-out';
        } else {
            img.style.transform = 'none';
        }
    });
});
