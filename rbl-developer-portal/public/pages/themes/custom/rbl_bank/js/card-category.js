(function ($, Drupal) {
  Drupal.behaviors.creditcard = {
    attach: function (context, settings) {
      // Group all same in one
      $('#edit-mobile-card-category .form-checkbox').each(function () {
        $('.parent-' + this.value).wrapAll('<div class="parent-offers parent-offers-' + this.value + '"></div>');
      });

      $('#edit-mobile-card-category .form-checkbox').click(function (event) {

        // Show last selected.
        var lastChecked = '';
        if (this.checked){
          lastChecked = this.value;
          $('.mobile-offers .parent-offers').hide();
          $('#edit-mobile-card-category .checkbox').removeClass('show-arrow');
          $('.mobile-offers .parent-offers-' + this.value).show();
          $('.form-item-mobile-card-category-' + this.value).addClass('show-arrow');
        }
        else {
          event.preventDefault();
          /*lastChecked = $('#edit-mobile-card-category .form-checkbox:checked:last').val();
          $('.mobile-offers .parent-' + this.value + ' .form-checkbox').each(function(index) {
            $(this).prop('checked', false);
          });*/
        }
        $('.mobile-offers .parent-offers').hide();
          $('#edit-mobile-card-category .checkbox').removeClass('show-arrow');
          $('.mobile-offers .parent-offers-' + this.value).show();
          $('.form-item-mobile-card-category-' + this.value).addClass('show-arrow');


      });

      // Clear all
      $('.mobile-filter-clear-all').click(function () {
        $('.mobile-offers .parent-offers').hide();
        $('.mobile-category .form-checkbox').each(function(index) {
            $(this).prop('checked', false);
            $(this).parents().removeClass('show-arrow');
        });
        $('.mobile-offers .form-checkbox').each(function(index) {
            $(this).prop('checked', false);
        });
      });

      // Filters click
      $('.view-header .filters').click(function(){
        // Onload show default value.
         $('#edit-mobile-card-category .form-checkbox').each(function () {
           if (this.checked){
             $('.mobile-offers .parent-offers-' + this.value).show();
           }
         });

        // Set width to 100%.
        $('.mobile-filter-wrapper').width('100%');
      });

      $('.filter-top-row').click(function(){
        $('.mobile-filter-wrapper').width('0');
      });

      // Scroll to category.
      if ($('div#credit-cards-category').length) {
        // Scroll to offers
        // get navbar height
        var navbar_height = $('.navbar').outerHeight();
        $('html, body').animate({
          scrollTop: $('#credit-cards-category').offset().top - (navbar_height)
        }, 500);
      }
    }
  };
})($, Drupal);
