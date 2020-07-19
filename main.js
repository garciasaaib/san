/*
    if (screen.width < 1024) document.write ("Pequeña") 
    else if (screen.width < 1280) document.write ("Mediana") 
    else document.write ("Grande") 
*/

/* BURGER LOGIC */
const burguer = document.getElementById('burguer')
const navItems = document.getElementById('nav-items')
burguer.addEventListener('click', () => navItems.classList.toggle('d-block'))
// Turn an Object to an Array to use forEach
const navLinks = Object.values(document.getElementsByClassName('nav-link'))
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => navItems.classList.toggle('d-block'))
})


/*const $header = document.getElementById('header')
const $nav = document.getElementById('nav')
const $nav_logo = document.querySelector('.nav_logo')

const options = {
  // root: document.querySelector('body'),
  rootMargin: '0px 0px 0px 0px',
  threshold: .9,
}

function callback(entries, observer){
  const entry = entries[0]
  const onTop = entry.intersectionRatio >= .9
  if(onTop){
    console.log('transparente')
    $nav.classList.remove('not_top')
    $nav_logo.setAttribute('src', './assets/static/logo2.png')
  }else{
    console.log('blanco')
    $nav.classList.add('not_top')
    $nav_logo.setAttribute('src', './assets/static/logo3.png')
  }
} 
const observer = new IntersectionObserver(callback, options);
*/