/* menuScript.js */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        item.style.color = '#000';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#ff0000';
        item.style.color = '#fff';
    });
});