$(function () {

    var index = 0;
    var slider_images_array = [ "images/slider-1.jpg", "images/slider-2.jpg", "images/slider-3.jpg", "images/slider-4.jpg" ];

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
                __animate_slider(),
                __animate_slider_overlay()
            }
        });
    }, 3000);

    $.each(slider_images_array, function( index, img_url ){
        $.ajax({
             url: img_url
        });
    });

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
    function __animate_slider_overlay(){

        var slider_overlay = $( '.site-section-content-overlay' );

        if ( slider_overlay.hasClass('active') ) {

            slider_overlay.removeClass('active');

        } else {

            slider_overlay.addClass('active');

        }

    }



    $( '#site-slider-outer-wrap' ).css({

        height: $( window ).height()

    });

});
