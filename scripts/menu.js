let menuButton = document.getElementsByClassName('hamburger')
let menu = document.getElementsByClassName('menu')
menuButton[0].addEventListener('click', ()=>{
  menu[0].classList.toggle('menu_is_active')
})
