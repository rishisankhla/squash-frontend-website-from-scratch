//slide show code for visit page
//Took help from "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow"

var slideIndex = 1;
showSlides(slideIndex);

var intervalId = window.setInterval(function(){
  plusSlides(1);
}, 5000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dot2s = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dot2s.length; i++) {
      dot2s[i].className = dot2s[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot2s[slideIndex-1].className += " active";
}
