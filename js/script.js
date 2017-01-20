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

});
