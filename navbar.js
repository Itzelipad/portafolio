document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu-nav').classList.toggle('active');
});


const menuItems = document.querySelectorAll('.menu__list__item');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('menu-nav').classList.remove('active');
    });
});
