let blocs = document.getElementsByClassName('images')
let left = document.querySelector('.leftButton')
let right = document.querySelector('.rightButton')
let ext = blocs.length*100-100
let index = 0
left.addEventListener('click', () => {
  if (index >= 0) {
    index = -ext
    for (let i = 0; i < blocs.length; i++) {
    blocs[i].style.transform = 'translate('+index+'%)'
  }
  }
  else {
    index += 100
    for (let i = 0; i < blocs.length; i++) {
      blocs[i].style.transform = 'translate('+index+'%)'
    }
  }
  })
right.addEventListener('click', () => {
  if (index <= -ext) {
    index = 0
    for (let i = 0; i < blocs.length; i++) {
    blocs[i].style.transform = 'translate('+index+'%)'
  }
  }
  else {
    index -= 100
    for (let i = 0; i < blocs.length; i++) {
      blocs[i].style.transform = 'translate('+index+'%)'
    }
  }
  })
