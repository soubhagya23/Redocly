setTimeout(function () {
    $("#ShopriteCreditCard, #PlatinumMaximaCard").hide();

    $("#CookiesCreditCard-btn").addClass("active");

    $("#CookiesCreditCard-btn").click(function () {

        $("#CookiesCreditCard, #ShopriteCreditCard, #PlatinumMaximaCard").hide();

        $("#CookiesCreditCard").fadeIn();

        $("#CookiesCreditCard-btn, #ShopriteCreditCard-btn, #PlatinumMaximaCard-btn").removeClass("active");

        $(this).addClass("active")

    });

    $("#ShopriteCreditCard-btn").click(function () {

        $("#CookiesCreditCard, #ShopriteCreditCard, #PlatinumMaximaCard").hide();

        $("#ShopriteCreditCard").fadeIn();

        $("#CookiesCreditCard-btn, #ShopriteCreditCard-btn, #PlatinumMaximaCard-btn").removeClass("active");

        $(this).addClass("active")

    });

    $("#PlatinumMaximaCard-btn").click(function () {

        $("#CookiesCreditCard, #ShopriteCreditCard, #PlatinumMaximaCard").hide();

        $("#PlatinumMaximaCard").fadeIn();

        $("#CookiesCreditCard-btn, #ShopriteCreditCard-btn, #PlatinumMaximaCard-btn").removeClass("active");

        $(this).addClass("active")

    });

   
        // go-to-top-wrap

        var toTop = $('.go-to-top-wrap');

        toTop.click(function () {

          $('html, body').animate({

              scrollTop: $('html, body').offset().top,

          });

        });
}, 600);