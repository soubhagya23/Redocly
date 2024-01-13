(function ($, Drupal) {
  Drupal.behaviors.compare = {
    attach: function (context, settings) {
      var max_select = 3;
      var current_element = 1;
      var compare_page_link = $('.compare-page').attr('href');
      var new_link = '';
      $('.compare-btn-wrap a').click(function(event) {
        event.preventDefault();

        var compare_node = $(this).attr('data-id');
        $(this).parent().addClass('active compare_selected');

        // Update count in selection message.
        var total_selected = $('.compare_selected').length;
        var selection_msg = "<b>" + total_selected + "</b> out of max " + max_select + " credit cards selected";
        $('.compare-prod-left .cards-selected-msg').html(selection_msg);

        // Update image and text
        var image_src = $('.card-wrapper-' + compare_node + ' img').attr('src');
        $('.compare-prod-card:nth-of-type('+ current_element +') img.card-img').attr("src", image_src);
        var card_title = $('.card-wrapper-' + compare_node + ' .card-body h3 a').text();
        $('.compare-prod-card:nth-of-type('+ current_element +') p.card-title').text(card_title);
        $('.compare-prod-card:nth-of-type('+ current_element +') .compare-prod-card-add').hide();
        $('.compare-prod-right .circle-count span').text(current_element);

        $('.compare-prod-card:nth-of-type('+ current_element +').compare-prod-card .compare-prod-card-add').hide();
        $('.compare-prod-card:nth-of-type('+ current_element +').compare-prod-card .wrapper').show();
        current_element++;

        $('#block-compareblock .compare-prod-wrap-outer').css('position', 'fixed');
        $('#block-compareblock .compare-prod-wrap-outer').css('borrom', '0');

        if (new_link !== '') {
          new_link += '&'
        }
        new_link += 'node[]=' + compare_node;

        $('.compare-page').attr('href', compare_page_link + '?' + new_link);

      });

      $('.compare-prod-wrap-outer').click(function(event) {
        $('.compare-btn-wrap').removeClass('compare_selected');
        $('.compare-btn-wrap').removeClass('active');
        // Update count in selection message.
        var total_selected = $('.compare_selected').length;
        var selection_msg = "<b>" + total_selected + "</b> out of max " + max_select + " credit cards selected";
        $('.compare-prod-left .cards-selected-msg').html(selection_msg);

        current_element = 1;
        $('.compare-prod-card .compare-prod-card-add').show();
        $('.compare-prod-card .wrapper').hide();
      });
    }
  };
})($, Drupal);
