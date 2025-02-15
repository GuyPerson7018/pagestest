// script.js

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    const scrollIndicator = document.querySelector('.scroll-down-indicator');
    if(scrollIndicator){
      scrollIndicator.addEventListener('click', () => {
          document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
      });
    }
});