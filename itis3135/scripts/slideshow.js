let slideIndex = 1;
let slideInterval;

// Initialize slideshow
showSlides(slideIndex);
startSlideInterval();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex-1] && dots[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
}

function startSlideInterval() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000);
}

// Pause slideshow when hovering over the container
document.querySelector('.container').addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves
document.querySelector('.container').addEventListener('mouseleave', function() {
    startSlideInterval();
});