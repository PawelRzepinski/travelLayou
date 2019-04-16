
    // parallax

    $(window).scroll(function () {
        $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
    });

//     // menu
// $(function(){
//     const $menuBtn = document.querySelector(".menuBtn");
//     const $menu = document.querySelector(".popup");

//     $menuBtn.on("click", function(){
//         console.log('działa');
        
//         // $menu.css.display = "flex";
//     })
// })
    



