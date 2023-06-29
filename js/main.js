


const menuItems = document.querySelectorAll('.menu-item');

meniItems.forEach(function(item) {
    item.addEventListener('click', funtion(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add ('active');
    });
}):


const changeColor = document.querySelector('#changeColor');
changeColor.addEventListener('click', function() {
    document.body.classList.toggle('changeColor')
})


