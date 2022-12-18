
const screenWidth = window.screen.width

if(screenWidth > 768){
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
      });
}

if(screenWidth <= 768){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });
}