
const parrafo = document.querySelector('#parrafo');

parrafo.addEventListener('click', funtion(e) {
e.target.classList.toggle('parrafo-modificado');
});


const menuItems = document.querySelectorAll('.menu-item');

meniItems.forEach(function(item) {
    item.addEventListener('click', funtion(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
}):


const changeColor = document.querySelector('#');
changeColor.addEventListener('click', function() {
    document.body.classList.toggle('change-Color')
})


