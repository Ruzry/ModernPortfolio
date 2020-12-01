//Select DOM Items
const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State Of Menu
let showMenu = false;

menuBTN.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBTN.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //set Menu State
        showMenu = true;
    }
    else{
        menuBTN.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //set Menu State
        showMenu = false;

    }

}


var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n);

}

function currentDiv(n) {
    showDivs(slideIndex = n);

}

function showDivs(n){

    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > x.length){
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++){

        x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("w3-white", "");
    }

    x[slideIndex].style.display = "block";
    dots[slideIndex].className += "w3-white";
}