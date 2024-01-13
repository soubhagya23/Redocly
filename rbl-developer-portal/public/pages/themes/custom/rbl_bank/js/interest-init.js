var pageURLRate = document.location.href.match(/[^\/]+$/)[0];
// alert(pageURLRate);
if (pageURLRate == "interest-rates?tab=saving-account") {
    //    #(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(1) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 115
    });
}
else if (pageURLRate == "interest-rates?tab=fixed-deposit") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(2) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 190
    });
}
else if (pageURLRate == "interest-rates?tab=nri-fixed-deposit") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(3) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 270
    });
}
else if (pageURLRate == "interest-rates?tab=recurring-deposits") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(4) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 340
    });
}
else if (pageURLRate == "interest-rates?tab=FCNR") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(5) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 430
    });
}
else if (pageURLRate == "interest-rates?tab=MCLR") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(6) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 515
    });
}
else if (pageURLRate == "interest-rates?tab=base-rate-PLR") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(7) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 590
    });
}
else if (pageURLRate == "interest-rates?tab=repo-linked-lending-rate") {
    //    $(this).find('a').addClass("active");
    $(".field--name-field-interest-rate-table-sectio .field__item:nth-child(8) .card-header .faq-rbl-link-faq").trigger("click");
    $('html, body').animate({
        'scrollTop': $("section.common-section.tab-section.download-section").position().top + 675
    });
}
else if (pageURLRate == "category?tab=tab-super-card"){
    setTimeout(function () {
    // alert();
    $("#edit-card-type-25").trigger("dblclick");
    $("#edit-card-type-25").prop("checked", true);
    $('html, body').animate({
        'scrollTop': $(".banner-section").position().top + 450
    });
}, 600);
}


   setTimeout(function () {

             //todo : for interest rate section - query string link
             $("#btn-saving-account").click(function () {
                // alert();
                setTimeout(function () {
                $('html, body').animate({
                    'scrollTop': $("section.common-section.tab-section.download-section").position().top + 95
                });
            }, 100);
            });


              //todo : for interest rate section - query string link
              $("#btn-fixed-deposit").click(function () {
                // alert();
                setTimeout(function () {
                $('html, body').animate({
                    'scrollTop': $("section.common-section.tab-section.download-section").position().top + 190
                });
            }, 100);
			 });
			 }, 1000);