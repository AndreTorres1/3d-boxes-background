function xpandImage(event) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            images.forEach(img => {
                if (img !== image) {
                    img.classList.remove('active');
                } else {
                    img.classList.add('active');
                }
            });
        });
    });
}
