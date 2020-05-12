/*global $, window */
$(function () {
    "use strict";
    
    // header
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    
    $(".header-100").height($(window).height() - 100);
    $(window).resize(function () {
        $(".header-100").height($(window).height() - 100);
    });

    // scroll window
    $(window).scroll(function () {
        console.log("The Name Of Allah");
        if ($(this).scrollTop() > 400) {
            // For Navbar
            $("nav.navbar").css({
                position: "fixed",
                width: "100%",
                zIndex: 999
            });
            // For Button go to top
            $(".go-top").css("display", "block");
        } else {
            // For Navbar
            $("nav.navbar").css({
                position: "relative",
                width: "100%",
                zIndex: 999
            });
            // For Button go to top
            $(".go-top").css("display", "none");
        }
    });

    // go part of website
    // data link
    $("[data-link]").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).data("link")).offset().top
        }, 500);
    });

    //===> data show
    $("[data-show]").click(function () {
        $($(this).data("show")).toggleClass("w-250px");
        $($(this).data("show")).parent().toggleClass("mr-250px");
    });

    // data hide
    $("[data-hide]").click(function () {
        $($(this).data("hide")).css("display", "none");
    });

    //===> data images
    $("[data-images]").click(function () {
        $(".image-box img").attr("src", "../../images/" + $(this).data("images"));
    });


    // data testimonailse
    $("[data-test]").click(function () {
        $("." + $(this).data("test")).toggleClass("test");
        $("." + $(this).data("test")).addClass("xyz");
        console.log($("." + $(this).data("test")));
    });
    
    // carousel
    $('.carousel').carousel()
    
    // Library ===> nicescroll
    $("html").niceScroll({
        cursorcolor: '#0f0'
    });
    $(".menu").niceScroll({
        cursorcolor: 'orange'
    });
});



