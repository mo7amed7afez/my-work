/*global $, window*/
$(function () {
    "use strict";
    // Part Header Global
    $(".full-header").height($(window).height());
    $(window).resize(function () { $(".full-header").height($(window).height()); });
    
    /* start Part Global */
    $("html").niceScroll({
        cursorcolor: '#00f'
    });
    $("[data-target]").click(function () { $($(this).data("target")).slideToggle(); });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("header").height()) {
            $("header .navbar").css("position", "fixed");
            $(".go-top").css("display", "block");
        } else {
            $("header .navbar").css("position", "relative");
            $(".go-top").css("display", "none");
        }
    });
    
    $(".go-top").click(function () { 
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    /* ********************* End Global **************************** */
});