searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle("active");
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}



window.onscroll = () => {
    // console.log(searchForm);
    // searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};
window.onload = () => {
    if (window.scrollY > 80) {
      document.querySelector(".header .header-2").classList.add("active");
    } else {
      document.querySelector(".header .header-2").classList.remove("active");
    }
  };
  var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides:true,
   autoplay:{delay:2000,disableOnInteraction:false},
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    },
  });

  var swiper2 = new Swiper(".featured-slider", {
    spaceBetween:10
    ,loop:true,
    centeredSlides:true,
    autoplay:{delay:2000,disableOnInteraction:false},
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
       0: {
         slidesPerView:1
       },
       450:{
        slidesPerView:2
       },
       768: {
         slidesPerView:3
       },
       1024: {
         slidesPerView:4
       },
     },
   });
   var swiper2 = new Swiper(".arrivals-slider", {
    spaceBetween:10
    ,loop:true,
    centeredSlides:true,
    autoplay:{delay:2000,disableOnInteraction:false},
   
     breakpoints: {
       0: {
         slidesPerView:1
       },
       768: {
         slidesPerView:2
       },
       1024: {
         slidesPerView:3
       },
     },
   });
   var swiper2 = new Swiper(".arrivals-slider2", {
    spaceBetween:10
    ,loop:true,
    centeredSlides:true,
    autoplay:{delay:6000,disableOnInteraction:false},
   
     breakpoints: {
       0: {
         slidesPerView:1
       },
       768: {
         slidesPerView:2
       },
       1024: {
         slidesPerView:3
       },
     },
   });
   

