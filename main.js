document.addEventListener("DOMContentLoaded", () => {
  let search = document.querySelector('.search-box');
  let cart = document.querySelector('.cart');
  let user = document.querySelector('.user');

  document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
  }

  document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
  }

  document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
  }
});

//  The code runs once the HTML document is fully loaded (DOMContentLoaded), and it sets up event listeners for click actions on three icons:

// Search Icon (#search-icon)

// Cart Icon (#cart-icon)

// User Icon (#user-icon)

// Each icon is associated with a panel or dropdown:

// .search-box

// .cart

// .user


  




// swiper
    var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
