// parallax

$(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});


