function toggle() {
    var extra = document.getElementById('extra');
    var button = document.querySelector('.button');

    if (extra.style.display === 'block') {
        extra.style.display = 'none';
        button.textContent = 'More';
    } else {
        extra.style.display = 'block';
        button.textContent = 'Less';
    }
}