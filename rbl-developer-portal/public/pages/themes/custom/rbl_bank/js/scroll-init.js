

$(window).scroll(function () {

    if ($(this).scrollTop() > 1) {

        $('.gotop').css({

            bottom: "25px"

        });

    } else {

        $('.gotop').css({

            bottom: "-100px"

        });

    }

});

$('.gotop').click(function () {

    $('html, body').animate({

        scrollTop: '0px'

    }, 800);

    return false;

});



$(window).scroll(function () {
    var sticky = $('.tab-wrap'),
        scroll = $(window).scrollTop();

    if (scroll >= 500) {
        sticky.addClass('fixed-tab');
        $('body').addClass('fixed-tab-body');
    }
    else {
        sticky.removeClass('fixed-tab');
        $('body').removeClass('fixed-tab-body');
    }
});


// body-active-effect
$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 500) {

        $('body').addClass("body-active-effect");

        //$('.compare-prod-wrap-outer').addClass("hide-compare");

    }

    else {

        $('body').removeClass("body-active-effect");

        //$('.compare-prod-wrap-outer').removeClass("hide-compare");
    }

  });
