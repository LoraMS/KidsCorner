$(document).on('ready', function () {
    // Slick slider
    $(".fade").slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Gallery
    // Lightbox
    var $overlay = $('<div id="modal"></div>');
    var $image = $("<img>");
    var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

    // Add overlay
    $overlay.append($image).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    $(".img-overlay i").click(function (event) {
        event.preventDefault();
        var imageLocation = $(this).parent().prev().attr("src");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    $overlay.click(function () {
        $(this).fadeOut("slow");
    });



    // Summary
    // Notify.js is a jQuery plugin to provide simple yet fully customisable notifications. The javascript code snippets in this documentation with the green edge are runnable by clicking them.
    // $.notify("Hello World");


    // Basic Usage
    // Element Notifications
    // You can place notifications on any element:
    // $(".elem-demo").notify("Hello Box");


    // Success
    // $.notify("Access granted", "success");
    // Info
    // $.notify("Do not press this button", "info");
    // Warning
    // $.notify("Warning: Self-destruct in 3.. 2..", "warn");
    // Error
    // $.notify("BOOM!", "error");
});