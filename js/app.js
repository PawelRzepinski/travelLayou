const header = document.querySelector(".mainHeader");
const menuBtn = document.querySelector(".menuBtn");
const logo = document.querySelector(".mainLogo p");
const menuList = document.querySelector(".popup");
const delateBtn = document.querySelector(".delateBtn");
const menuLi = document.querySelectorAll(".menuLi");

console.log(logo);

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



// scroll

// window.scroll(function(){
//     if (this.scrollTop() > 50){
//         header.style.background = "red";
//     }
// })

$(window).scroll(function(){
    if($(this).scrollTop() > 550){
        $("header").css("background", "rgba(46, 49, 65, 0.8)");
        $(".mainLogo p").css("display", "block");
    } else {
        $("header").css("background", "none");
        $(".mainLogo p").css("display", "none");
    }
})