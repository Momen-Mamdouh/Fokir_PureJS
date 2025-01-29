"use strict"

// ^===============================START Loader=====================================>
let loaderBg = document.querySelector(".loader-bg");
setTimeout(()=>{

  loaderBg.classList.add("d-none");

},2000)
// ^===============================END Loader=====================================>

export let brandsIconData = [
  {
      icon:`fa-brands fa-facebook-f`,
      iconLink:`https://www.facebook.com/`,

  },

  {
      icon:`fa-brands fa-twitter`,
      iconLink:`https://x.com/`,

  },

  {
      icon:`fa-brands fa-google`,
      iconLink:`https://mail.google.com/`,

  },

  {
      icon:`fa-brands fa-github`,
      iconLink:`https://github.com/Momen-Mamdouh?tab=repositories`,

  },
]

import { About } from "./about.js";
import { Service } from "./services.js";
import { Portfolio } from "./portfolio.js";
import { Counter } from "./counter.js";
import { MySwipper } from "./mySwiper.js";
import { Blog } from "./blog.js";
import { ContactUs } from "./contactUs.js";
import { Footer } from "./footer.js";


// ^===============================START Navbar Scrolling=====================================>
// *To Detect the scroll positon to view or hide NavBar
let myNavbar = document.querySelector('.navbar');
let navbarToggler = document.querySelector('button.navbar-toggler'); 
let navbarCollapse = document.querySelector('#navbarNav'); 
window.addEventListener('wheel', (e)=>{
    if (e.wheelDelta > 0) {
      // ^^ true if it positive value so it moving Up and show navbar
      myNavbar.classList.add("showNavBar");
      myNavbar.classList.remove("hideNavBar");

      if(window.scrollY <= 25){
          myNavbar.classList.remove("my-navbar-bg");
        }
      else if(window.scrollY > 25){
          myNavbar.classList.add("my-navbar-bg");
      }
    }

    else{
      // ^^ false if it negative value so it moving Down and hide navbar
      myNavbar.classList.add("hideNavBar");
      myNavbar.classList.remove("showNavBar");
    }
});

navbarToggler.addEventListener('click', () => {
  // ^^ As at cliking in toggler button with this wheel event css Override so i forcely 
  // ^^ hide with smoothly transation the navbar at sm-view
  navbarCollapse.classList.toggle("visually-hidden")
  navbarCollapse.classList.toggle("opacity-0")
});

// ^===============================END Navbar Scrolling=====================================>
  
// !!=======================================================================================>

// ??===============================Typed Script=====================================>
  // &=====================Home Section===================>
let typed = new Typed('#typed-element', {
    strings: ['Fron-end Developer', 'Ui Developer', 'Web Developer'],
    typeSpeed: 25,
    backSpeed: 25,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
});
// &=====================Home Section===================>
// ??===============================Typed Script=====================================>

// !!=======================================================================================>

// ^===============================START Services Section=====================================>
const aboutSection = new About();
// ^===============================END Services Section=====================================>

// ^===============================START Services Section=====================================>
const serviceSection = new Service();
// ^===============================END Services Section=====================================>

// ^===============================START Our Portfolio Section=====================================>
const displayPortfolio = new Portfolio();
// ^===============================END Our Portfolio Section=====================================>

// ^===============================START Counter Section=====================================>
const displayCounter = new Counter();
// ^===============================END Counter Section=====================================>


// ^===============================START FeedBack Section=====================================>
const swiper = new Swiper('.swiper', {
        speed: 1000,
        spaceBetween: 500,
        fill: "column",
      

        grabCursor: "true",
        pagination: {
          el: '.swiper-pagination',
          clickable: "true"
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
          },

          
        
      });

const mySwiper =  new MySwipper();
// ^===============================END FeedBack Section=====================================>
  

// ^===============================START Blog Section=====================================>
const dispalyBlog = new Blog();
// ^===============================END Blog Section=====================================>


// ^===============================START ContactUs Section=====================================>
const contact = new ContactUs();
// ^===============================END ContactUs Section=====================================>

// ^===============================START Footer Section=====================================>
const footerSection = new Footer();
// ^===============================END Footer Section=====================================>





