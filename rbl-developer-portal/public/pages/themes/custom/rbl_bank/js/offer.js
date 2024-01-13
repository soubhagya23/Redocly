/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.rbl_bank_offers = {
      attach: function (context, settings) {
        $(document).ready(function () {
          var urlParams = new URLSearchParams(window.location.search);
          var offer_type = urlParams.get('type');
          var offer_cat = urlParams.get('cat[]');
          if (offer_type) {
            $('.tid-' + offer_type).addClass('active');

            // Offers and promotion landing page 
            // Add type in url
            var url = window.location.href;
            $('.node--type-offers-and-promotions-landing .term-wrapper a').each(function(){
              var $this = $(this);       
              var _href = $this.attr("href"); 
              $this.attr("href", _href + '&type=' + offer_type);
            });

            // Show term name in search result header.
            var seleted_type_name = $('.tid-' + offer_type + ' span').text();
            $('.view-header span').html('<b>' + seleted_type_name + '</b>');
          }
          else {
            $('.offer-promo-filter-wrap').find('a:first').addClass('active');
          }

          if (offer_cat || offer_type) {
            // Scroll to offers
            // get navbar height
            var navbar_height = $('.navbar').outerHeight();
            $('html, body').animate({
              scrollTop: $('#offers').offset().top - (navbar_height + 20)
            }, 500);
          }


          // sort.
          var sort_order = urlParams.get('sort_order');
          if (sort_order == 'DESC') {
            $(".offer-header-right select").val("DESC");
          }
        });
      }
    };

})(jQuery, Drupal);
