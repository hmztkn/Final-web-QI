$(document).ready(function() {
$( "#accordion" ).accordion();
$("#btn1").hide();
      $("#btn2").hide();
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

function btn1Click(){
      $("#div1").show();
      $("#btn1").hide();
    }

    function btn2Click(){
      $("#div2").show();
      $("#btn2").hide();
    }

    function  img1Click(){
      $("#div2").hide();
      $("#btn2").show();
    }

    function  img2Click(){
    $("#div1").hide();
    $("#btn1").show();
  }
