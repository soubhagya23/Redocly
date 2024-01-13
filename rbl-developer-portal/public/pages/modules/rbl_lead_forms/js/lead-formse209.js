(function ($, Drupal) {
  Drupal.behaviors.lead_forms = {
    attach: function (context, settings) {

    $('.letters-only').bind('keypress', function(event) {
      return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)
    });

    $('.field-name').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid name.';
      $('#name-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "" ) {
        $('#name-error').text(error_text);
      }
    });

    $('.field-pin').bind('blur', function(e){
      var regName = /^[1-9][0-9]{5}$/;
      var error_text = 'Please enter valid pincode.';
      $('#user-pin-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "" ) {
        $('#user-pin-error').text(error_text);
      } else {
        $('#user-pin-error').text('');
        $('#user-state-error').text('');
        $('#user-city-error').text('');
        $('.field-mobile').focus();
        var hostname = $(location).attr('hostname');
        if (hostname == 'devproject.co.in' || hostname == 'localhost') {
          var get_url = "/rbl-bank/get_pin_data?pin=" + $(this).val();
        }
        else {
          var get_url = "/get_pin_data?pin=" + $(this).val();
        }
        var jqxhr = $.getJSON( get_url, function() {
          console.log( "success" );
        }).done(function(result_data) {
            $('#edit-state').val(result_data[0].state);
            $('#edit-city').val(result_data[0].city);
            $('#edit-state').attr('readonly', 'readonly');
            $('#edit-city').attr('readonly', 'readonly');
          });

      }
    });

    $('.field-mobile').bind('blur', function(e){
      var regName = /^[1-9][0-9]{9}$/;
      var error_text = 'Please enter valid mobile.';
      $('#user-mobile-error').text(error_text);
      if ( !$(this).val().match(regName) || $(this).val().trim() == "" ) {
        $('#user-mobile-error').text(error_text);
      } else {
        $('#user-mobile-error').text('');
      }
    });

    $('.field-email').bind('blur', function(e){
      var inputvalues = $(this).val();
      if (inputvalues == '') {
        return;
      }
      var error_text = 'Please enter valid mail.';
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test(inputvalues)){
        $('#user-email-error').text(error_text);
      }else {
        $('#user-email-error').text('');
      }
    });
	
	// edit-state

	 $('.reset-state').change(function (event) {
		 event.preventDefault();
		 console.log("In");
       $('.reset-location').prop('selectedIndex', 'select');
     });

     $('.numbers-only').bind('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
         event.preventDefault();
         return false;
       }
     });

     $('.reset-button').bind('click', function (event) {
      location.reload(true);
     });

    }
  };
})($, Drupal);
