/*global $, window, document, console*/
$(document).ready(function () {
    "use strict";
    // Global Rulez
    $(".header").height($(window).innerHeight());
    $(window).resize(function () {
        $(".header").height($(this).innerHeight());
    });
    $("[data-target]").click(function () {
        $($(this).data("target")).slideToggle();
        console.log($(this).data("target"));
    });
    //$(".nav-collapse").height($(".header").innerHeight());
     
});