$(document).ready(function(){
    var images = ["images/website-banner-3-1536x614.jpg", "images/images.jpg"];
    var currentIndex = 0;

    $(".carousel-control-next").click(function(){
        currentIndex = (currentIndex + 1) % images.length;
        $(".img1").attr("src", images[currentIndex]);
    });

    $(".carousel-control-prev").click(function(){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        $(".img1").attr("src", images[currentIndex]);
    });
});
