

if ($(window).width() <= 767) {

  console.log("Inside custom js mobile")
  $(".footer-common-wrap .list-unstyled").hide()

  $(".footer-common-wrap .footer-head").click(function (e2) {

     e2.preventDefault();

     $(this).siblings('.list-unstyled').slideToggle();

     $(this).find('i').toggleClass("fa-minus");

     $(this).parents(".other-list-row").find('.list-unstyled').slideToggle();

     $(this).toggleClass("active-t");

  });

  $(".footer-mobile .tab-bar-icon ").click(function () {
    

     $(".footer-mobile").find(".active-menu").removeClass("active-menu");

     $(this).addClass("active-menu");

  });
}
if ($(window).width() <= 992) {

  console.log("Inside custom js PC")
  $('.acnav__label').on('click', function () {

     var list = $(this).find('.acnav__list');

     var parent = $(this).parent('.has-children');

     var parent_1 = $(this).parent('.has-children1').length;

     if (parent_1 > 0) {
      console.log("Inside custom js PC_2")

        var parent_1 = $(this).parent('.has-children1');

        if (parent_1.hasClass('is-open')) {

          console.log("Inside custom js PC 3")

           list.slideUp('fast');

           parent_1.removeClass('is-open');

        }

        else {
          console.log("Inside custom js PC 4")
           list.slideDown('fast');

           parent_1.addClass('is-open');

        }

     }

     else {

        if (parent.hasClass('is-open')) {
          console.log("Inside custom js PC 5")

           list.slideUp('fast');

           parent.removeClass('is-open');

        }

        else {

           list.slideDown('fast');

           parent.addClass('is-open');

        }

     }

  });

}



//other dropdown

$('.dropdown.other-dropdown').hover(function () {

  $('.dropdown-toggle', this).trigger('click');

});

