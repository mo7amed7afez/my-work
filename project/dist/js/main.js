$(function () {
    // Height Window
    $(".header").height($(window).height() - 25);
    $(window).resize(function () {
        $(".header").height($(window).height() - 25);
    });

    // Data Show
    $("[data-show]").click(function () {
        $("." + $(this).data("show")).slideToggle();
    });


    // ajax
    $("[data-preview]").click(function () {
        $(".preview-content").load("pages/"+ $(this).data("preview"), function (one, two, three) {console.log("");});
        console.log($(this).data("preview") + ".html");
	});

    console.log($(window).width());
});