// Footer crousel next and prev button js code
(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);


// navbar explore div hide and show 
function myFunction() {
    var x = document.getElementById("explore-div");
    var i = document.getElementById("icon");

    if (x.style.display === "none") {
      x.style.display = "block";
      i.classList.remove("fa-angle-down")
      i.classList.add("fa-angle-up")

    } else {
      x.style.display = "none";
      i.classList.add("fa-angle-down")
    }
  }


// index banner product tab gallery 
openImg("ssd1");

function openImg(imgName) {
    var i, x;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
}

// for tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});



