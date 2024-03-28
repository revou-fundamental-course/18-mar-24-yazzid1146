var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
}

function moveNext() {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

var slideshowInterval = setInterval(showSlides, 2000); // Change image every 2 seconds

document.getElementById("nextBtn").addEventListener("click", moveNext);
