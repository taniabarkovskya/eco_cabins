window.addEventListener('scroll', function(){
  this.scrollY > 0 ? this.document.querySelector('.header').classList.add('scroll') : this.document.querySelector('.header').classList.remove('scroll')
});

const swiper = new Swiper('.slider-materials', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

