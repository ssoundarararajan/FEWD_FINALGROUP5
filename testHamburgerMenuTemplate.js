document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav-list');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});
