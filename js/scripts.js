//Tabs
function openInfo(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


/*Skills bar*/


window.onscroll = function () {
  myFunction()
};

function myFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    jQuery(".progress-bar1").each(function () {
      jQuery(this).find(".progress-content").animate({
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );

      jQuery(this).find(".progress-number-mark").animate({
        left: jQuery(this).attr("data-percentage")
      }, {
        duration: 2000,
        step: function (now, fx) {
          var data = Math.round(now);
          jQuery(this).find(".percent").html(data + "%");
        }
      });
    });
  }
}


/* Porfolio */
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