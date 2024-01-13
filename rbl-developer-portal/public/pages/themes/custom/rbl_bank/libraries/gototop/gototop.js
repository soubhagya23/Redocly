jQuery(window).scroll(function () {

    if (jQuery(this).scrollTop() > 1) {

        jQuery('.gotop').css({

            bottom: "25px"

        });

    } else {

        jQuery('.gotop').css({

            bottom: "-100px"

        });

    }

});

jQuery('.gotop').click(function () {

    jQuery('html, body').animate({

        scrollTop: '0px'

    }, 800);

    return false;

});