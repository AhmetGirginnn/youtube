document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const colors = ['#f0f0f0', '#ffe6e6', '#e6ffe6', '#e6e6ff', '#fff2e6'];
    let currentColorIndex = 0;

    colorButton.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    });
}); 