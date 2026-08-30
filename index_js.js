/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '28px',
        duration: 650,
        delay: 0,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        interval: 70,
        reset: false,
        viewFactor: 0.12,
        viewOffset: { top: 24, right: 0, bottom: 24, left: 0 }
    });

    /*SCROLL ABOUT*/
    sr.reveal('.about__img', { origin: 'left' });
    sr.reveal('.about__subtitle, .about__text, .certification-badge', { interval: 70 });

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle, .skills__text', { interval: 60 });
    sr.reveal('.skills__data', { interval: 55 });

    /*SCROLL CONTACT*/
    sr.reveal('.contact__input, .contact__button', { interval: 55 });
}
