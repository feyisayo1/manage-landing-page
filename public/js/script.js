var btn = document.getElementById("menuBtn")
var menu = document.getElementById('menu')

btn.addEventListener('click', () => {
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})