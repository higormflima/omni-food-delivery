$(document).ready( function() {

    /* For the Sticky Navigation    */

    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }, {
      offset: '60px;'
    });
    
    
    /* Scrool Buttons */

    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  /*rola a pagina para a seção plans quando clica no botão "I'm hungry" */
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  /*rola a pagina para a seção start quando clina no botão "show me more */
     });


     /*Navigation Scroll */


     // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation    //TODO ESSE BLOCO NAVIGATION SCROLL FOI COPIADO DO DANIEL PQ O DA AULA 64 NÃO FUNCIONOU O SMOOTH
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
            /* Animations on Scroll */

        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
            /* as animações são classes de CSS e podem ser encontradas no site daneden.github.io/animate.css */
        }, {
          offset: '50%'
        });

         $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
          offset: '50%'
        });

         $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
          offset: '50%'
        });

         $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
          offset: '50%'
        });


         /* Mobile Nav */

         $('.js--nav-icon').click(function() {
           var nav = $('.js--main-nav');
           var icon = $('.js--nav-icon i');

           nav.slideToggle(200);
           if (icon.hasClass('ion-navicon-round')) {
               icon.addClass('ion-close-round');
               icon.removeClass('ion-navicon-round');  /*troca o icone do menu pelo icone de fechar quando o menu é aberto */
           } else {
             icon.addClass('ion-navicon-round');
             icon.removeClass('ion-close-round');
           }

         });






});

