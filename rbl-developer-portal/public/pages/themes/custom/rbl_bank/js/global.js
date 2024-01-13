/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.rbl_bank = {
        attach: function (context, settings) {
		


			
            // Value Calculator input box
			$('a').addClass('a-attention-link-add-script');
			$('#attention-link-modal .btn.btn-sm.btn-view-adj, .footer-common-wrap .follow-us-ul li a, .common-header-wrap .circle-btn').removeClass('a-attention-link-add-script')
            setTimeout(function () {
					$('.tb-megamenu .Payments-menu-show:last-child .dropdown-menu .mega-nav>li.dropdown-submenu .tb-megamenu-submenu').addClass('ul-level-2');
                $(".value-calc-left tr td input.form-control-sm.bg-white").each(function () {
                    $(this).attr('maxlength', '8').attr('pattern', '\d*').attr('type', 'text');
                });
                $(".common-header-wrap .rbl-nav-header a").each(function () {
                    $('a[href*="http"]').attr('target', '_blank');
                });
				$("section.common-section.offers-promotions-sec-wrap .mobile-filter-wrapper .header .filters-block-clear a").removeAttr("target");
                // $(".node--type-credit-card-landing-page .credit-cards-mapping-outer .credit-cards-type >div:nth-child(3) a")
                // .attr('href', 'https://www.rblbank.com/younique/').attr('target', '_blank');
				
				$(".bootstrap-datetimepicker-widget li.picker-switch").click(function(){
					//alert();
					$(".bootstrap-datetimepicker-widget .list-unstyled").toggleClass('show-datepicker-adj');
					$(".form-wrap-card .js-form-item ul.list-unstyled li:nth-child(1)").toggleClass("d-none");
				});
				
				$("input#edit-cancel-btn").click(function(){
					//alert();
					$(".call-wrapper.custom-modal-adj").hide();
					location.reload();
				});
				
				
				if($('#btn-fix-rate').length > 0){
					$.ajax({
						method: "POST",
						headers: {
							'Content-Type': 'application/json;charset=UTF-8'
						},
						url: "https://www.rblbank.com/fx-rate.php",
						data: '{"GetFXRatesForHomePage": {}}'
					})
					.done(function (response) {
						$('#btn-fix-rate').attr('target','_blank');
						$('#btn-fix-rate').attr('href', response)
					});
				}
				
				
				if($('#btn-nrifx-rate').length > 0){
					$.ajax({
						method: "POST",
						headers: {
							'Content-Type': 'application/json;charset=UTF-8'
						},
						url: "https://applications.rblbank.com//api/v1/RBLAPI",
						data: '{"GetNREFXRates": {}}'
					})
					.done(function (response) {
						$('#btn-nrifx-rate').attr('target','_blank');
						$('#btn-nrifx-rate').attr('href', response.data.downloadLink)
					});
				}
				
				//3rd party modal
				
			$(".btn.common-btn-blue, .btn.common-btn-yellow, .btn.common-btn-gray, .btn.common-btn-outline, .a-attention-link-add-script").click(function() {
                    if ($(this).attr('href')) {

                        const mainString = $(this).attr('href');
                        const searchString = "rblbank.com";
						const searchStringPdf = ".pdf";

                        // Using indexOf
                        if (mainString.indexOf(searchString) !== -1) {

                        }
						else if (mainString.indexOf(searchStringPdf) !== -1) {
							$(this).attr('target', '_blank')
                        }
						else {
                            if(mainString.indexOf(".com") !== -1 ||  mainString.indexOf(".in") !== -1 || mainString.indexOf(".co.in") !== -1 || mainString.indexOf(".ai") !== -1 || mainString.indexOf(".com") !== -1 || mainString.indexOf(".org") !== -1 || mainString.indexOf(".net") !== -1 || mainString.indexOf(".info") !== -1 || mainString.indexOf(".online") !== -1 || mainString.indexOf(".live") !== -1 || mainString.indexOf(".shop") !== -1 || mainString.indexOf(".me") !== -1 || mainString.indexOf(".site") !== -1 || mainString.indexOf(".store") !== -1 || mainString.indexOf(".net.in") !== -1 || mainString.indexOf(".com") !== -1 || mainString.indexOf(".com") !== -1 || mainString.indexOf(".app") !== -1 || mainString.indexOf(".ind.in") !== -1){
                                $("#attention-link-modal").modal('show');
                                $("#attention-link-btn").attr('href', mainString);
                                return false;
                            }

                        }


                    }
                });
				
				$(".node--type-credit-card-landing-page .credit-cards-mapping-outer .credit-cards-type >div:nth-child(2) a").text('Bajaj Finserv RBL Bank SuperCards');
				//Reward product
				$(".row.food-beverages-dining-row, .row.lifestyle-row, .row.online-shopping-row").hide();
					$(".row.food-beverages-dining-row").show();
					$('#rewards-catalogue-select').on('change', function() {
						let rewardVal = this.value;
					   
						if(this.value == "Food"){
							$(".row.food-beverages-dining-row, .row.lifestyle-row, .row.online-shopping-row").hide();
							$(".row.food-beverages-dining-row").show();
						}
						else if(this.value == "Lifestyle"){
							$(".row.food-beverages-dining-row, .row.lifestyle-row, .row.online-shopping-row").hide();
							$(".row.lifestyle-row").show();
						}
						else if(this.value == "Online-Shopping"){
							$(".row.food-beverages-dining-row, .row.lifestyle-row, .row.online-shopping-row").hide();
							$(".row.online-shopping-row").show();
						}
					   
					  });
			  
            }, 1000);
            $(".g-search-modal .modal-dialog.modal-fullscreen .search_section form input.form-control").attr('placeholder', 'I am looking for...');

            if ($(window).width() >= 768) {

                $("#footerIcons-toggle-ul").hide();
     
                $("#footerIcons-other-a").click(function (e1) {
     
                   e1.preventDefault();
     
                   $(this).find('i').toggleClass("fa-minus");
     
                   $("#footerIcons-toggle-ul").slideToggle();
     
                });
     
             }
        
		//date picker
		//$('.datetimepicker').datetimepicker();
		
		
		// Date Time Picker
		var currentDate = new Date();
		$('.datetimepicker').datetimepicker({
			inline: true,
			sideBySide:true,
			minDate: currentDate,  // Set the minimum selectable date to the current date
			defaultDate: currentDate,
			daysOfWeekDisabled: [0, 6],
			disabledHours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23], // Disable hours outside 9AM to 6PM
			enabledHours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18], // Enable hours within 9AM to 6PM
			//disabledTimeIntervals: [[0, 9], [18, 24]] // Disable time before 9:30AM and after 6:30PM
			//format: 'LT', // Display time in 12-hour format
			//stepping: 30, // Set the minute stepping to 30 minutes
			//minDate: moment('9:30 AM', 'h:mm A'),
			//maxDate: moment('6:30 PM', 'h:mm A')
		});
		
		$(".datetimepicker.datetimepicker-dropdown-bottom-right").addClass("datepicker");
		
			
			// Homepage FX Rate PDF
			//$("#btn-fix-rate").click(function () {
			//	var path = 'https://fxadmin.rblbank.com/pdfs/rbl_files/forex_path/homepage/';
			//	getFXRate(path);
			//});
			
			function getFXRate(path) {
				const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
						"July", "August", "Sep", "Oct", "Nov", "Dec"
					];

				var d = new Date();
				// var dd = d.getDate();
				var dd = d.getDate() - 2; // This only apply on holidays like Sat | Sun
				var mm = monthNames[d.getMonth()];
				var yy = d.getFullYear().toString().slice(-2);
				var currDate = dd + ' ' + mm + ' ' + yy;
				console.log(currDate);

				var FoxedRateChartlink = path + currDate + '.pdf';
				window.open(FoxedRateChartlink, '_blank');
			}

            // NRI FX Rate Download PDF
            /*$("#btn-nrifx-rate").click(function () {
                var FoxedRateChartlinkOriginal = 'https://fxadmin.rblbank.com/pdfs/rbl_files/forex_path/';

                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];

                var d = new Date();
				//var dd = d.getDate(); // This apply on working day
                var dd = d.getDate() - 2; // This only apply on holidays
                var mm = monthNames[d.getMonth()];
                var yy = d.getFullYear().toString().slice(-2);
                var currDate = 'NR - ' + dd + ' ' + mm + ' ' + yy;
                console.log(currDate);

                var FoxedRateChartlink = FoxedRateChartlinkOriginal + currDate + '.pdf';
                console.log("Filename ", FoxedRateChartlink);
                window.open(FoxedRateChartlink, '_blank');
            });*/
			
			  // more less section
                let heightMoreLess = $(".moreless-section .moreless-inner").outerHeight();
                console.log(heightMoreLess);
                if(heightMoreLess > 325){
                    $(".moreless-section").addClass('show-btn-moreless');
                    // /personal-banking/term-deposits/regular-fixed-deposits
                }
                $(".moreless-section .moreless-button").click(function(f1){
                    $(this).parent('.moreless-section').toggleClass('active');
                    f1.preventDefault();
                })
			
			setTimeout(function () {
            // for popup payemnt page
            $("#rblNetbanking-").click(function(){
                // alert('rblNetbanking');
                $("#a-net-banking-pay-now").attr("href", "https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176");
                $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                });

                $("#ccavenue-").click(function(){
                // alert('ccavenue');
                $("#a-net-banking-pay-now").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                });

                $("#billdesk-").click(function(){
                // alert('billdesk');
                $("#a-net-banking-pay-now").attr("href", "https://pgi.billdesk.com/pgidsk/pgmerc/rtncard/index.jsp");
                // $("#a-net-banking-pay-now").attr("href", "#billdesk-modal");
                // $("#a-net-banking-pay-now").attr("data-bs-toggle", "modal");
                });

                $("#razorpay-").click(function(){
                // alert('razorpay');
                $("#a-net-banking-pay-now").attr("href", "https://ccservices.rblbank.com/rblrazorpay/");
                $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                });

                $("#btn-collapse-debit-card").click(function(){
                    // alert('ccavenue');
                    $("#a-net-banking-pay-now").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                    $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                    $("#ccavenuelogo").trigger('click');
                });

                $("#btn-collapse-net-banking").click(function(){
                    // alert('ccavenue');
                    $("#a-net-banking-pay-now").attr("href", "https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176");
                    $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                    $("#rblNetbanking-").trigger('click');
                });

                $("#rblNetbanking-xs-").click(function(){
                // alert('rblNetbanking');
                $("#a-net-banking-pay-now-xs").attr("href", "https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176");
                $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                });

                $("#rblNetbanking2-xs-").click(function(){
                    // alert('rblNetbanking');
                    $("#a-net-banking-pay-now-xs").attr("href", "https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176");
                    $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                    });
               
                $("#ccavenue-xs-").click(function(){
                // alert('ccavenue');
                $("#a-net-banking-pay-now-xs").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
               
                });


                $("#billdesk-xs-").click(function(){
                // alert('billdesk');
                $("#a-net-banking-pay-now-xs").attr("href", "https://pgi.billdesk.com/pgidsk/pgmerc/rtncard/index.jsp");
                // $("#a-net-banking-pay-now-xs").attr("href", "#billdesk-modal");
                // $("#a-net-banking-pay-now-xs").attr("data-bs-toggle", "modal");
                });
                $("#btn-collapse-net-banking-xs").click(function(){
                    $("#a-net-banking-pay-now-xs").attr("href", "https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176");
                    $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                    $("#rblNetbanking2-xs-").trigger('click');
                    });
                $("#btn-collapse-debit-card-xs").click(function(){
                    // alert('billdesk');
                    // $("#a-debit-card-xs").attr("href", "https://pgi.billdesk.com/pgidsk/pgmerc/rtncard/index.jsp");
                    // $("#a-net-banking-pay-now-xs").attr("href", "#billdesk-modal");
                    // $("#a-net-banking-pay-now-xs").attr("data-bs-toggle", "modal");
                    $("#a-debit-card-xs").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                    $("#a-debit-card-xs").removeAttr("data-bs-toggle");
                    $("#ccavenuelogo-xs-").trigger('click');
                    });

                $("#razorpay-xs-").click(function(){
                // alert('razorpay');
                $("#a-net-banking-pay-now-xs").attr("href", "https://ccservices.rblbank.com/rblrazorpay/");
                $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                });
                $("#razorpay2-xs-").click(function(){
                    // alert('razorpay');
                    $("#a-net-banking-pay-now-xs").attr("href", "https://ccservices.rblbank.com/rblrazorpay/");
                    $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                    });

                //    -------------
                $("#ccavenuelogo-").click(function(){
                    // alert('ccavenuelogo');
                    $("#a-debit-card").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                    $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                });
                $("#razorpaydebitcard-").click(function(){
                    // alert('razorpaydebitcard');
                    $("#a-debit-card").attr("href", "https://ccservices.rblbank.com/rblrazorpay/");
                    $("#a-net-banking-pay-now").removeAttr("data-bs-toggle");
                });
                $("#debitcardBilldesk-").click(function(){
                    // alert('debitcardBilldesk');
                    $("#a-debit-card").attr("href", "https://pgi.billdesk.com/pgidsk/pgmerc/rtncard/index.jsp");
                    // $("#a-net-banking-pay-now").attr("href", "#billdesk-modal");
                    // $("#a-net-banking-pay-now").attr("data-bs-toggle", "modal");
                });
               
                $("#ccavenuelogo-xs-").click(function(){
                    // alert('ccavenuelogo-xs');
                    $("#a-debit-card-xs").attr("href", "https://ccservices.rblbank.com/rblccavenue/");
                    $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                });
                $("#razorpaydebitcard-xs-").click(function(){
                    // alert('razorpaydebitcard-xs');
                    $("#a-debit-card-xs").attr("href", "https://ccservices.rblbank.com/rblrazorpay/");
                    // $("#a-net-banking-pay-now-xs").removeAttr("data-bs-toggle");
                });
                $("#debitcardBilldesk-xs-").click(function(){
                    // alert('debitcardBilldesk-xs');
                    $("#a-debit-card-xs").attr("href", "https://pgi.billdesk.com/pgidsk/pgmerc/rtncard/index.jsp");
                    // $("#a-net-banking-pay-now-xs").attr("href", "#billdesk-modal");
                    // $("#a-net-banking-pay-now-xs").attr("data-bs-toggle", "modal");
                });
                // billdesk- debitcardBilldesk- billdesk-xs- debitcardBilldesk-xs-

            }, 1000);
			
			
				setTimeout(function () {
			// tab url start
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			var tabName = urlParams.get('tabName');
			var params=queryString.split("&");
			var extraParams="";
			params.forEach(element => {
				if(element!=""){

					element=element.replaceAll("?","");
					if(!element.includes("tabName")){
						extraParams += "&"+element;
					}
				}
			});
			if(queryString.includes("?tabName=fees-&-charges")){
				tabName="fees-&-charges";
			}
			var tabID="";
			if(tabName!=null && tabName!=""){
				$(".nav-item.nav-link").each(function(){
					if($(this).text().toLowerCase()==tabName.replaceAll("-"," ").toLowerCase()){
						tabID=$(this).attr("id");
					}
				});
				if(tabID==null|| tabID==""){
					tabID=$(".nav-item.nav-link.active").attr("id");
				}
				
				if(tabName.toLowerCase().startsWith("product") && tabName.toLowerCase().endsWith("benefits")){
					tabID="nav-ProductBenefits-tab";
				}
					document.getElementById(tabID).click();
				}

				var url=window.location.href;
				url=url.replace(queryString,"");
				var tabText=$(".nav-item.nav-link.active").first().text();
				if(tabText.toLowerCase().startsWith("product") && tabText.toLowerCase().endsWith("benefits")){
					tabText=tabText.replaceAll(" ","");
					tabText=tabText.replace("\n","-");
				}
				if(extraParams.length>0){
					tabText=tabText+extraParams;
				}
				var tabNameLength=$(".nav-item.nav-link").length;
				if(tabNameLength>0){
					window.history.replaceState(null, url+"/?tabName="+tabText.toLowerCase().replaceAll(" ","-"), url+"/?tabName="+tabText.toLowerCase().replaceAll(" ","-"))
					$(".nav-item.nav-link").click(function(){
					tabText=$(this).text();
					if(tabText.startsWith("Product") && tabText.endsWith("Benefits")){
						tabText=tabText.replaceAll(" ","");
						tabText=tabText.replace("\n","-");
					}
					if(extraParams.length>0){
						tabText=tabText+extraParams;
					}
					window.history.replaceState(null, url+"/?tabName="+tabText.toLowerCase().replaceAll(" ","-"), url+"/?tabName="+tabText.toLowerCase().replaceAll(" ","-"))
				})
				}
		}, 2000);
		// tab url end
		
				
        }
    };

})(jQuery, Drupal);

