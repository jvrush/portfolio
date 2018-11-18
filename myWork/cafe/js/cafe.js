var slideIndex = 0;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides(slideIndex = n);
 }

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1;}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 10000); // 1000 = 1 sec
  }

  var slideIndex = 0;
  showSlides1(slideIndex);

  function currentSlide1(n) {
    showSlides1(slideIndex = n);
 }

  function showSlides1() {
      var i;
      var slides = document.getElementsByClassName("mySlides1");
      var dots = document.getElementsByClassName("dot1");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1;}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 10000); // 1000 = 1 sec
  }
  
 