
// css class add on scroll and then
// onscroll nav bar color and css change 
const nav = document.querySelector("nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("sticky",this.window.scrollY>0);
})

// ================
let menu = document.querySelector('#menu-icon i');
let navmenu = document.querySelector('.nav-menu ul');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navmenu.classList.toggle('open')
}

// <i class="fa-solid fa-xmark"></i>
