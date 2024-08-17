let navbar = document.querySelector('.navbar');
let cartContainer = document.querySelector('.cart-items-container');
let searchform = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartContainer.classList.remove('active'); // Hide the cart when the menu is open
    searchform.classList.remove('active'); // Hide the seachform when the menu is open
};

document.querySelector('#cart-btn').onclick = () => {
    cartContainer.classList.toggle('active');
    navbar.classList.remove('active'); // Hide the menu when the cart is open
    searchform.classList.remove('active'); // Hide the seachform when the menu is open
};

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    cartContainer.classList.remove('active'); // Hide the cart when the menu is open
    navbar.classList.remove('active'); // Hide the menu when the cart is open
};

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartContainer.classList.remove('active');
}