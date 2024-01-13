(function ($, Drupal) {
  Drupal.behaviors.all_forms = {
    attach: function (context, settings) {

      $('.letters-only').bind('keypress', function(event) {
      return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)
    });

    $('.min-length').bind('blur', function(e){
      var error_text = 'Please Enter Valid Overseas Mobile No.';
      if ( $(this).val().length < 5 ) {
        $('#user-indmobile-error').text(error_text);
      } else {
		 $('#user-indmobile-error').text('');
	  }
    });
	
	// Name
    $('.field-name').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid name.';
      $('#name-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#name-error').text(error_text);
      }
    });
	
	// Firstname
	$('.field-firstname').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid name.';
      $('#name-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#name-error').text(error_text);
      }
    });
	
	// Lastname
	$('.field-lastname').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid name.';
      $('#lastname-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#lastname-error').text(error_text);
      }
    });
	
	// Employee Name
	$('.field-employee-name').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid employee name.';
      $('#employee-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#employee-error').text(error_text);
      }
    });
	
	// Experiance
	$('.field-experiance').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter experiance.';
      $('#experience-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#experience-error').text(error_text);
      }
    });
	
	// City
	$('.field-city').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid city.';
      $('#city-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#city-error').text(error_text);
      }
    });
	
	// Textarea
	$('.field-suggestion').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid suggestion.';
      $('#suggestion-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#suggestion-error').text(error_text);
      }
    });

	// Pin
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
		$('#state-error').text('');
		$('#city-error').text('');
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

	// Mobile
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
	
	// Tenor
    $('.field-tenor').bind('blur', function(e){
      if ($(this).val() > 0 ) {
        $('#name-tenor').text('');
      } else {
        $('#name-tenor').text('Please Enter Tenor.');
      }
    });
	
	// Amount
    $('.field-amount').bind('blur', function(e){
      if ($(this).val() > 0 ) {
        $('#amount-error').text('');
      } else {
        $('#amount-error').text('Please Enter Amount.');
      }
    });
	
	// beneficiary
    $('.field-beneficiary').bind('blur', function(e){
      if ($(this).val() != "" ) {
        $('#beneficiary-error').text('');
      } else {
        $('#beneficiary-error').text('Please Enter beneficiary name.');
      }
    });

	//pin code
	$('.field-pinn').bind('blur', function(e){
      var regName = /^[1-9][0-9]{5}$/;
      var error_text = 'Please enter valid pin.';
      //$('#user-pin-error').text(error_text);
	  $('#user-pin-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "" ) {
        $('#user-pin-error').text(error_text);
      } else {
        $('#user-pin-error').text('');
      }
    });
	
	// Phone
	$('.field-phone').bind('blur', function(e){
      var regName = /^[1-9][0-9]{9}$/;
      var error_text = 'Please enter valid phone no.';
      $('#user-phone-error').text(error_text);
      if ( !$(this).val().match(regName) || $(this).val().trim() == "" ) {
        $('#user-phone-error').text(error_text);
      } else {
        $('#user-phone-error').text('');
      }
    });

	// Email 
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
	
	// Company Name
	$('.field-companyname').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid company name.';
      $('#companyname-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#companyname-error').text(error_text);
      }
    });
	
	// Designation
	$('.field-designation').bind('blur', function(e){
      var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
      var error_text = 'Please enter valid designation.';
      $('#designation-error').text('');
      if ( !$(this).val().match(regName) || $(this).val().trim() == "") {
        $('#designation-error').text(error_text);
      }
    });
	
	// Country
	$('.field-country').change(function() {
		if ($(this).val() != 0) {
			$('#user-country-error').text('');
		} else {
			$('#user-country-error').text('Please select country.');
		}
	});
	
	// State
	$('.field-state').change(function() {
		if ($(this).val() > 0) {
			$('#user-state-error').text('');
		} else {
			$('#user-state-error').text('Please select state.');
		}
	});
	
	// City
	$('.field-city').change(function() {
		if ($(this).val() > 0) {
			$('#user-city-error').text('');
		} else {
			$('#user-city-error').text('Please select city.');
		}
	});
	
	
	// purpose agri
	$('.purpose-agri').change(function() {
		if ($(this).val() != 0) {
			$('#user-purpose-error').text('');
		} else {
			$('#user-purpose-error').text('Please select purpose.');
		}
	});
	
	
	// City
	$('.accountholders').change(function() {
		if ($(this).val() != 0) {
			
			$('#user-account-error').text('');
		} else {
			$('#user-account-error').text('Please select account holder.');
		}
	});
	
	// State validaiton which comes from Taxonomy
	$('.field-state-taxo').change(function() {
		if ($(this).val() === 0) {
			$('#user-state-error').text('Please select state.');
		} else {
			$('#user-state-error').text('');
		}
	});
	
	// City validaiton which comes from Taxonomy
	$('.field-city-taxo').change(function() {
		if ($(this).val() != 0) {
			$('#user-city-error, .city-error').text('');
		} else {
			$('#user-city-error, .city-error').text('Please select city.');
		}
	});
	
	// District validaiton which comes from Taxonomy
	$('.field-district-taxo').change(function() {
		if ($(this).val() != 0) {
			$('#user-district-error').text('');
		} else {
			$('#user-district-error').text('Please select district.');
		}
	});
	
	// Branch validaiton which comes from Taxonomy
	$('.field-taxo-branch').change(function() {
		if ($(this).val() === 0) {
			$('#nearestBranch-error').text('Please select branch.');
		} else {
			$('#nearestBranch-error').text('');
		}
	});
	
	// Products
	$('.field-products').change(function() {
		if ($(this).val() === 0) {
			$('#user-product-error').text('Please select product.');
		} else {
			$('#user-product-error').text('');
		}
	});
	
	// Account Type
	$('.field-account-type').change(function() {
		if ($(this).val() === 0) {
			$('#user-account-error').text('Please select account type.');
		} else {
			$('#user-account-error').text('');
		}
	});
	
	// Type of Bank Guarantee
	$('.field-guarantee').change(function() {
		if ($(this).val() === 0) {
			$('#guarantee-error').text('Please select type of bank guarantee.');
		} else {
			$('#guarantee-error').text('');
		}
	});
	
	// Disclaimer
	$('.disclaimer').click(function(){
		if (this.checked) {
			$("#user-disclaimer-error").text('');
		} else {
			$("#user-disclaimer-error").text('Please select the authorization checkbox to proceed.');
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
		clearText();
        location.reload(true);
     });
	 
	 // This use to clear the text box values.
	 function clearText() {
		 $('.field-name').val('');
		 $('.field-mobile').val('');
		 $('.field-phone').val('');
		 $('.field-email').val('');
		 $('.field-country').val(''); // Drop down
		 $('.field-pin').val('');
		 $('.numbers-only').val('');
		 $("input[name='mobile']").val('');
		 $("input[name='state']").val('');
		 $("input[name='city']").val('');
		 $("input[name='indmobile']").val('');
		 $('.disclaimer').removeAttr('checked'); // Checkbox
		 $('.sendCC').removeAttr('checked'); // Send CC
		 $('.field-firstname').val('');
		 $('.form-required').val('');
		 $('.field-lastname').val('');
		 $('.field-branch').val('');
		 $('.field-employee-name').val('');
		 $('.field-experiance').val('');
		 $('.field-address').val('');
		 $('.field-message').val('');
		 $('.field-state-taxo').val(0);
		 $('.field-branch').val(0);
		 $('.field-products').val(0);
		 $('.field-account-type').val(0);
		 $('.field-tenor').val('');
		 $('.field-amount').val('');
		 $('.field-beneficiary').val('');
		 $('.field-guarantee').val(0);
		 $('.accountholders').val(0); // Are you RBL Bank account holder/customer?
		 $('.field-suggestion').val('');
		 $('.testRadio').prop('checked', false); // Radio Button
		 
	 }
	 
	// Commercial Banking 
	$(".accountnumber").hide();
	$(".branch").hide();
	$(".interestedToOpen").hide();
	$(".btn-account").hide();

	$(".accountholders").change( function(){
		if ($(this).val() === 'Yes') {
			$(".accountnumber").show();
			$(".branch").show();
		}
		
		if ($(this).val() === 'No') {
			$(".accountnumber").hide();
			$(".branch").hide();
			$(".interestedToOpen").show();
		}
	});
	
	// Change on Interested to open an accout
	$(".interestedToOpen").change( function(){
		if ($(this).val() === 'Yes') {
			$(".btn-account").show();
		}
		
		if ($(this).val() === 'No') {
			$(".btn-account").hide();
		}
	});
	 
	 
	 // Agri Business Total Amount Code
	 $('.calculate_total').keyup(function(e) {
		 e.preventDefault();
		 var total = 0;
		 var crop_amount = 0;
		 var investment_amount = 0;
		 var wrf_amount = 0;
		 var fpc_amount = 0;
		 
		 crop_amount = $('input[name=crop_loan_amount]').val();
		 investment_amount = $('input[name=investment_loan_amount]').val();
		 wrf_amount = $('input[name=warehouse_receipt_finance_amount]').val();
		 fpc_amount = $('input[name=farmer_producer_companies_amount]').val();
		 
		 if (isNaN(crop_amount) || crop_amount === '') {
			 crop_amount = 0;
		 } 
		 if (isNaN(investment_amount) || investment_amount === '') {
			 investment_amount = 0
		 } 
		 if (isNaN(wrf_amount) || wrf_amount === '') {
			 wrf_amount = 0
		 } 
		 if (isNaN(fpc_amount) || fpc_amount === ''){
			 fpc_amount = 0
		 }
		 
		 console.log("Crop Amt", crop_amount);
		 console.log("investment_amount", investment_amount);
		 console.log("wrf_amount", wrf_amount);
		 console.log("fpc_amount", fpc_amount);

		 total = parseInt(crop_amount) + parseInt(investment_amount) + parseInt(wrf_amount) + parseInt(fpc_amount);
		 if (isNaN(total)){
			 total = 0
		 }
		 console.log('Total ', total);
		 $('.total_amount').val(total);
		 
		 if (total < 25000) {
			 $("#user-total-error").text('The amount should be minimum 25000/-');
		 } else {
			 $("#user-total-error").text('')
		 }
	 });

    }
  };
})($, Drupal);
