function showImagesOneByOne() {
    var images = document.querySelectorAll('.img-item');

    images.forEach(function(image, index) {
        setTimeout(function() {
            image.classList.add('visible');
        }, index * 500); // Delay each image by 500ms (adjust as needed)
    });
}

// Call the function when the slider becomes visible
showImagesOneByOne();
