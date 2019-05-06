const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".popup");
const delateBtn = document.querySelector(".delateBtn");
const menuLi = document.querySelectorAll(".menuLi");

console.log(menuLi);

// parallax
$(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});


    
const menuOpen = function (){
    menuList.style.display = "flex";
}

const menuClose = function(){
    menuList.style.display = "none";
}

const menuExit = function (){
    menuList.style.display = "none";
    console.log('działą event');
}

menuBtn.addEventListener("click", menuOpen);
delateBtn.addEventListener("click", menuClose);
menuLi.forEach(function(el){
    el.addEventListener("click", menuExit);
})