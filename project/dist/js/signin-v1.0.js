$(function () {
    // For Size
    $(".content").height($(window).height());
    $(window).resize(function () {
        $(".content").height($(window).height());
    });
    // Part Settings
    $(".settings span").click(function () {
        $(".setting-menu").fadeToggle();
    });
    // Switch Element
    $("li").click(function () {
        $($(this).data("collapse")).toggle();
        console.log($(this).data("collapse"));
    });
});