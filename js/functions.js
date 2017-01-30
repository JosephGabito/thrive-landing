$(function () {

    var index = 0;

    setTimeout(function(){

        $( '.slider-text-type-animate' ).typed({
            strings: [
                'E-Learning',
                'Community',
                'Company Portal',
                'Small Business'
            ],
            typeSpeed: 70,
            loop: true,
            backDelay: 3000,
            onStringTyped: function(){
                __animate_slider()
            }
        });
    }, 3000);

    $( '.site-slider-image-container' ).each(function(index, el){

        el = $(this);

        var slider_image = el.find( '.site-slider-image' ).attr( "src" );

        el.css( 'background-image', 'url(' + slider_image + ')' );

    });

    function __animate_slider(){
        var max_index = parseInt( $( '.site-slider-image-container' ).length),
            nodes = $( '.site-slider-image-container' );

        index++,

        nodes.removeClass( 'active' ),
        $( nodes[index] ).addClass( 'active' ),

        index === max_index - 1 && ( index = -1 )

    }

    $( '#site-slider-outer-wrap' ).css({

        height: $( window ).height()

    });

});
