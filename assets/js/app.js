$(document).ready(function() {

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

icons();

});

//agregando movimiento a iconos de Habilidades
function icons() {
  const skill = $('#skill');
  const cords = skill.offset().top;
  $(window).scroll(function() {
    if (window.scrollY >= cords) {
     $('.icon').addClass('magictime swashIn');
        };
      });
};




/*
* Para ir al top de la página.
*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




