$( document ).ready( function( $ ) {
    "use strict";

    var wow = new WOW({
        animateClass: 'animated',
        offset:       150,
        callback:     function(box) {
        }
      });
    wow.init();

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        autoWidth:true,
        center:true,
        dots:true,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    $( window ).scroll( function() {

        if ( $( this ).scrollTop() > 1 ) {

            $( '#header-container' ).addClass( 'sticky-header-active' );
        }

        else{

            $( '#header-container' ).removeClass( 'sticky-header-active' );

        }

    });

    $('#site-mobile-menu').on('click', function(e) {

        e.preventDefault();

        if ($(this).hasClass('active')) {

            $(this).removeClass('active');

        } else {

            $(this).addClass('active');

        }

    });

    $(function() {

        $('.site-nav-lists li a').on('click', function(e) {

            $( '.site-nav-lists li a' ).removeClass('active');

            e.preventDefault();

            if ($(this).hasClass('active')) {

                $(this).removeClass('active');

            } else {

                $(this).addClass('active');

            }

        });

        $( 'a[href*="#"]:not([href="#"])' ).click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                $( '.site-section').removeClass( 'active' );

                if (target.length) {

                    $('html,body').animate({

                        scrollTop: target.offset().top - $( '#header-container' ).height()

                    }, 500);

                    target.addClass( 'active' );

                    return false;

                }

            }

        });

    });

});
