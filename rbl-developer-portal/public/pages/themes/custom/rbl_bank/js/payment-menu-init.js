
var pageURL = document.location.href.match(/[^\?]+$/)[0];
//alert(pageURL);

setTimeout(function(){
    if ('onlineCardPayment=netBanking' == pageURL) {
        //$("#btn-collapse-net-banking").trigger("click");
        //$("#btn-collapse-net-banking-xs").trigger("click");
        //$('#collapse-net-banking').collapse({show: true});
        //$('#collapse-net-banking-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
	else if ('onlineCardPayment=showPopup' == pageURL) {
        //$("#btn-collapse-net-banking").trigger("click");
        //$("#btn-collapse-net-banking-xs").trigger("click");
        //$('#collapse-net-banking').collapse({show: true});
        //$('#collapse-net-banking-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
    else if ('onlineCardPayment=debitCard' == pageURL) {
        $("#btn-collapse-debit-card").trigger("click");
        $("#btn-collapse-debit-card-xs").trigger("click");
        $('#collapse-debit-card').collapse({show: true});
        $('#collapse-debit-card-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
    else if ('onlineCardPayment=upiPayment' == pageURL) {
        $("#btn-collapse-upi-card").trigger("click");
        $("#btn-collapse-upi-card-xs").trigger("click");
        $('#collapse-upi-card').collapse({show: true});
        $('#collapse-upi-card-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
    else if ('onlineCardPayment=mobApp' == pageURL) {
        $("#btn-collapse-mobile-app").trigger("click");
        $("#btn-collapse-mobile-app-xs").trigger("click");
        $('#collapse-mobile-app').collapse({show: true});
        $('#collapse-mobile-app-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
    else if ('onlineCardPayment=neft' == pageURL) {
        $("#btn-collapse-neft-payment").trigger("click");
        $("#btn-collapse-neft-payment-xs").trigger("click");
        $('#collapse-neft-payment').collapse({show: true});
        $('#collapse-neft-payment-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
    else if ('onlineCardPayment=otherWay' == pageURL) {
        $("#btn-collapse-other-way-pay").trigger("click");
        $("#btn-collapse-other-way-pay-xs").trigger("click");
        $('#collapse-other-way-pay').collapse({show: true});
        $('#collapse-other-way-pay-xs').collapse({show: true});
        const myModal = new bootstrap.Modal('#netBanking');
myModal.show();
    }
}, 600);   