
/*menu*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.visibility = "hidden";
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.visibility= "visible";
   
}


window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("img1").className = "slideUp";
    }
    if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500) {
        document.getElementById("header1").style.background="none";
    }
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("header1").style.background="black";
    }
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("info3").className = "slideUp";
    }
}


/*accordian*/
function myAcc()
{
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
}

function openLink(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace("red", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " red";
}

/*slider */
     var Index = 1;
     showSlides(Index);

    function plusSlides(n){
        showSlides(Index += n);
    }

    function currentSlide(n){
        showSlides(Index = n);
    }

    function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("slider1");
        if (n > slides.length) {Index = 1}    
        if (n < 1) {Index = slides.length}
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";  
        }
        slides[Index-1].style.display = "block";  
    }

/*Monthly/Yearly*/
function openLink1(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("month");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink1");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace("red", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " red";
}