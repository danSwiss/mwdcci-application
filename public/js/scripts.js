var $ = jQuery.noConflict();
$(document).ready(function ($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function (event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top )
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function () {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
    });
    /* ---------------------------------------------------------------------- */
    /*	Contact Map
    /* ---------------------------------------------------------------------- */
    var contact = {
        "lat": "39.136209",
        "lon": "-94.578629"
    }; //Change a map coordinate here! 

    try {
        var mapContainer = $('.map');
        mapContainer.gmap3({
            action: 'addMarker',
            marker: {
                options: {
                    icon: new google.maps.MarkerImage('../assets/marker.png')
                }
            },
            latLng: [contact.lat, contact.lon],
            map: {
                center: [contact.lat, contact.lon],
                zoom: 15
            },
        }, {
            action: 'setOptions',
            args: [{
                scrollwheel: false
            }]
        });
    } catch (err) {

    }

});
