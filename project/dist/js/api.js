$(function () {
    //===> displayImages Api
    var images = ["1.jpg", "2.jpg", "a.jpg", "a1.jpg", "a2.jpg", "header1.jpg", "header2.jpg"]; // get images from DB
    function displayImages(images = [], parent) {
        $(parent).html(''); // reset parent
        for (var i = 0; i < images.length; i++) {
            $(parent).append(`
                <div class="image-menu col-md-6">
                    <img class="w-100 h-100 d-block" src="../../images/${images[i]}" alt="images" data-images=${images[i]} />
                </div>
            `);
        }
    }
    displayImages(images, ".menu .row");

});


/*
window.onload = function() {
    
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);

}
*/