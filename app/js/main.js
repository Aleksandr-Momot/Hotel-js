// SLIDER
var slideIndex = 1;
var slideIndexPer = 1;
showSlides(slideIndex);
showSlidesPer(slideIndexPer);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function next() {
  this.plusSlides(1);
}

function prev() {
  this.plusSlides(-1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// SLIDER


// SLIDER-PERSON


function plusSlidesPer(n) {
    showSlidesPer(slideIndexPer += n);
}

function nextperson() {
  this.plusSlidesPer(1);
}

function prevperson() {
  this.plusSlidesPer(-1);
}

function currentSlidePer(n) {
    showSlidesPer(slideIndexPer = n);
}

function showSlidesPer(n) {
  var i;
  var slidesPer = document.getElementsByClassName("slide-person");
  var dots = document.getElementsByClassName("dot");
  if (n > slidesPer.length) {
    slideIndexPer = 1;
  }
  if (n < 1) {
    slideIndexPer = slidesPer.length;
  }
  for (i = 0; i < slidesPer.length; i++) {
    slidesPer[i].style.display = "none";
  }
  slidesPer[slideIndexPer - 1].style.display = "block";
}
