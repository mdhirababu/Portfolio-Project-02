/*=========================Typing Animation========================= */
var typed = new Typed(".porfession",{
    strings:["","System Administrator-IT",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

let menu = document.querySelector('.navtoggler');
let header = document.querySelector('.side');


menu.onclick = () =>{
    header.classList.toggle('active');
}
window.onscroll = () =>{
    header.classList.remove('active');
}