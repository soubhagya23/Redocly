(function ($, Drupal) {
  Drupal.behaviors.offer_filters = {
    attach: function (context, settings) {
      // open modal
      $('.modal-open-link a').click(function(){
        $('.mobile-filter-wrapper').width('100%');
      });

      
      jQuery('.fieldset-wrapper input').click(function(){ 
        const urlParams = new URLSearchParams(window.location.search);
        const selected_type = urlParams.get('type');
        var selected_cat = [];
        jQuery('.fieldset-wrapper input:checked').each(function(i){
           if (jQuery(this).prop('checked') == true){
            console.log(jQuery(this).val());
            selected_cat.push(jQuery(this).val());
            console.log(selected_cat);
          }
        }); 
        var unique = selected_cat.filter(function(itm, i, a) {
          return i == selected_cat.indexOf(itm);
        });
        if (jQuery(this).prop('checked') == false) {
          for( var i = 0; i < unique.length; i++){ 
            if ( unique[i] === jQuery(this).val()) { 
              unique.splice(i, 1); 
            }
          }
        }
        var selected_query = '';  
        for (let i = 0; i < unique.length; i++) {
          if (selected_query !== "" ) {
            selected_query += '&cat[]=' + unique[i];
          }
          else {
            selected_query += 'cat[]=' + unique[i];
          }
        }
        console.log(selected_query);
        if (selected_type != '') {
          if (selected_type != null) {
          selected_query = 'type='+ selected_type + '&' + selected_query;
          }
        }

        var sort_by = '&sort_by=title&sort_order=';
        var status = jQuery('.offer-header-right option:selected').val();
        if (status == 'DESC') {
          selected_query = selected_query + sort_by + status;
        }
        console.log(selected_query);
        location.replace('/offers?' + selected_query);
      });

      /*var url = document.location.href;
      var qs = url.substring(url.indexOf('?') + 1).split('&');
      for(var i = 0, result = {}; i < qs.length; i++){
          qs[i] = qs[i].split('=');
          result[qs[i][0]] = decodeURIComponent(qs[i][1]);
      }
      console.log(result);*/
    }
  };
})(jQuery, Drupal);
