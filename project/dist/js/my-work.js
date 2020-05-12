$(function () {
    "use strict";
    // Add Class preview icon
    $("[data-preview]").click(function () {
        $(".my-works").removeClass("preview-mobile preview-tablet preview-desktop").addClass($(this).data("preview"));
    });
    
    // data show
    $("[data-show]").click(function () {
        $("." + $(this).data("show")).slideDown().siblings("ul").slideUp();
    });
    
    // data display
    $("[data-display]").click(function () {
        $("iframe").attr("src", $(this).data("display"));
    });
});