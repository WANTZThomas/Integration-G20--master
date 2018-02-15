// let blocs = document.getElementsByClassName('images')
// let left = document.querySelector('.leftButton')
// let right = document.querySelector('.rightButton')
// let ext = blocs.length*100-100
// let index = 0
// left.addEventListener('click', () => {
//   if (index >= 0) {
//     index = -ext
//     for (let i = 0; i < blocs.length; i++) {
//     blocs[i].style.transform = 'translate('+index+'%)'
//   }
//   }
//   else {
//     index += 100
//     for (let i = 0; i < blocs.length; i++) {
//       blocs[i].style.transform = 'translate('+index+'%)'
//     }
//   }
//   })
// right.addEventListener('click', () => {
//   if (index <= -ext) {
//     index = 0
//     for (let i = 0; i < blocs.length; i++) {
//     blocs[i].style.transform = 'translate('+index+'%)'
//   }
//   }
//   else {
//     index -= 100
//     for (let i = 0; i < blocs.length; i++) {
//       blocs[i].style.transform = 'translate('+index+'%)'
//     }
//   }
//   })
//
// //navbar animation
// let page = document.getElementsByTagName('html')[0]
// let header = document.getElementById('top')
// let navbar = document.getElementsByClassName('navbarContent')[0]
// window.addEventListener('scroll', () => {
//     if (page.scrollTop > header.clientHeight) {
//         if (navbar.classList.contains('hide')) {
//             navbar.classList.remove('hide')
//         }
//     } else {
//         if (!navbar.classList.contains('hide')) {
//             navbar.classList.add('hide')
//         }
//     }
// })

//menu
let menuButton = document.getElementsByClassName('hamburger')
let menu = document.getElementsByClassName('menu')
menuButton[0].addEventListener('click', ()=>{
  menu[0].classList.toggle('menu_is_active')
})
