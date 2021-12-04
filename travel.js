//! NAVBAR

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

//! LOGİN FORM

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

//! SEARCH FORM

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{

    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// -----------------------------------------------

//! EĞER SERACH , USER VE MENU  BAR AÇIKKEN SCROLL İLE KAYARSAK KAPANIR.

window.onscroll = () =>{

    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

// ------------------------------------------------

//! DARK THEME MODE

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{

    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){

        document.body.classList.add('active');
    }

    else{

        document.body.classList.remove('active');
    }
};

//! SWIPPER JS REVIEW

var swiper = new Swiper(".review-slider", {  

    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

});

