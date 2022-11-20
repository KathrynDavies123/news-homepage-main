let burgerbutton = document.querySelector(".togglemenu");
let navlist = document.querySelector(".navlist");
let navigation = document.querySelector(".navigation");
let backgroundcolor = document.querySelector(".backgroundcolor");

burgerbutton.addEventListener("click", function() {
    burgerbutton.classList.toggle("buttonopen");
    navlist.classList.toggle("navlistopen");
    navigation.classList.toggle("open");
    backgroundcolor.classList.toggle("on");

    if (burgerbutton.classList.contains("buttonopen")) {
        burgerbutton.innerHTML = "<img src='./assets/images/icon-menu-close.svg' alt='close icon'>"
    }
    else {
        burgerbutton.innerHTML = "<img src='./assets/images/icon-menu.svg' alt='close icon'>"
    }
} )