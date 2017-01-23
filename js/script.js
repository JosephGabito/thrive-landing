$( document ).ready( function( $ ) {
    "use strict";

    $( window ).scroll( function() {

        if ( $( this ).scrollTop() > 1 ) {

            $( '#header-container' ).addClass( 'sticky-header-active' );
        }

        else{

            $( '#header-container' ).removeClass( 'sticky-header-active' );

        }

    });

    $(function() {

        $( 'a[href*="#"]:not([href="#"])' ).click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {

                    $('html,body').animate({

                        scrollTop: target.offset().top

                    }, 500);

                    target.addClass( 'active' ).delay(500);

                    return false;
                }

            }

        });

    });

});
