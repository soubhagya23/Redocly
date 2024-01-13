$(document).ready(function () {
    // Customer Type Radio Button
    $("input[name='typeOfCustomer']").change(function () {
        $("#range1").slider('setValue', 0);
        $("#range2").slider('setValue', 0);
        $("#range3").slider('setValue', 0);
        $('#range1Val,#range2Val,#range3Val').val(0);
        $("#MatAmt,#DepAmt,#IntErn").html(0);
        $("#MatDate").html('');
    });

    // Event on change of Type of Fixed Deposit
    $('#fixed-deposite1').on("change", function () {
        IntrestCal();
    });

    // Amount
    $('#range1Val').on("change", function () {
        $("#range1").slider('setValue', $('#range1Val').val());
        $("#DepAmt").html($('#range1Val').val());
        IntrestCal();
    });

    // Validation On Amount 
    $('#range1Val').on('change', function () {
        var amountMin = $("#loanAmtMin").html();
        var amountMax = $("#loanAmtMax").html();
        var amount = $('#range1Val').val(); // get tenure text value
        console.log("Min", amountMin, "Max ", amountMax, "Actual ", amount);
        if (amount > parseInt(amountMax) || amount < parseInt(amountMin)) {
            alert("Amount should be more than " + amountMin + " or less than " + amountMax);
            $("#range1").slider('setValue', 0);
            $('#range1Val').val(0);
            $("#DepAmt").html(0);
            $("#MatAmt").html(0);
            $("#IntErn").html(0);
            return false;
        } else {
            $("#range1").slider('setValue', amount);
            $("#DepAmt").html(amount);
        }
    });

    // Months
    $('#range2Val').on("change", function () {
        $("#range2").slider('setValue', $('#range2Val').val());
        IntrestCal();
    });

    // Validation On Tenor(Months)
    $('#range2Val').on('change', function () {
        console.log("In KeyUp Event");
        var tenureMax = $("#tenureMax").html();
        var tenureMin = $("#tenureMin").html();
        var tenure = $('#range2Val').val(); // get tenure text value
        console.log("Actual", tenure, "Max ", tenureMax);
        if (tenure > parseInt(tenureMax) || tenure < parseInt(tenureMin)) {
            alert("Tenure(Months) should be more than " + tenureMin + " or less than " + tenureMax);
            $("#range2").slider('setValue', 0);
            $('#range2Val').val(0);
            $("#DepAmt").html(0);
            $("#MatAmt").html(0);
            $("#IntErn").html(0);
            return false;
        } else {
            $("#range2").slider('setValue', tenure);
            $("#range2Val").html(tenure);
        }
    });

    // Tenor
    $('#range3Val').on("change", function () {
        $("#range3").slider('setValue', $('#range3Val').val());
        IntrestCal();
    });

    // Validation On Tenor(Days)
    $('#range3Val').on('change', function () {
        console.log("In KeyUp Event");
        var tenureMax = $("#dayMax").html();
        var tenureMin = $("#dayMin").html();
        var tenure = $('#range3Val').val(); // get tenure text value
        console.log("Actual", tenure, "Max ", tenureMax);
        if (tenure > parseInt(tenureMax) || tenure < parseInt(tenureMin)) {
            alert("Tenure(Days) should be more than " + tenureMin + " or less than " + tenureMax);
            $("#range3").slider('setValue', 0);
            $('#range3Val').val(0);
            $("#DepAmt").html(0);
            $("#MatAmt").html(0);
            $("#IntErn").html(0);
            return false;
        } else {
            $("#range3").slider('setValue', tenure);
            $("#range3Val").html(tenure);
        }
    });

    $("#range1").slider();
    $("#range1").on("change", function (slideEvt) {
        if (slideEvt.value.newValue > 0) {
            console.log("In IF", slideEvt.value.newValue);
            $("#range1Val").val(slideEvt.value.newValue);
            document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
                "en-IN"
            ).format(slideEvt.value.newValue);
            IntrestCal();
        }
    });

    $("#range1").on("slide", function (slideEvt) {
        if (slideEvt.value > 0) {
            $("#range1Val").val(slideEvt.value);
            document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
                "en-IN"
            ).format(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range2").slider();
    $("#range2").on("change", function (slideEvt) {
        $("#range2Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range2Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range2").on("slide", function (slideEvt) {
        $("#range2Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range2Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range3").slider();
    $("#range3").on("change", function (slideEvt) {
        $("#range3Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range3Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range3").on("slide", function (slideEvt) {
        $("#range3Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range3Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range4").slider();
    $("#range4").on("change", function (slideEvt) {
        $("#range4Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range4Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range4").on("slide", function (slideEvt) {
        $("#range4Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range4Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range5").slider();
    $("#range5").on("change", function (slideEvt) {
        $("#range5Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range5Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range5").on("slide", function (slideEvt) {
        $("#range5Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range5Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range6").slider();
    $("#range6").on("change", function (slideEvt) {
        $("#range6Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range6Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range6").on("slide", function (slideEvt) {
        $("#range6Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range6Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    $("#range7").slider();
    $("#range7").on("change", function (slideEvt) {
        $("#range7Val").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#range7Val").val(slideEvt.value.newValue);
            IntrestCal();
        }
    });
    $("#range7").on("slide", function (slideEvt) {
        $("#range7Val").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#range7Val").val(slideEvt.value);
            IntrestCal();
        }
    });

    // Home Loan Calculator
    // Event for reset button
    $("#reset_home_loan").click(function () {
        $("#loanAmount").slider('setValue', 0);
        $("#tenure").slider('setValue', 0);
        $("#rate").slider('setValue', 0);
        $('#loanAmountRange,#rateRange,#loanAmountRange,#loanTenure').val(0);
        $("#loanRate,#DepAmt,#intRate, #tenureVal, #emi").html(0);
        $("#illustrate").hide();
    });

    $('#loanAmountRange').keyup(function () {
        $("#loanAmount").slider('setValue', $('#loanAmountRange').val());
        $("#DepAmt").html($('#loanAmountRange').val());
    });
	
	// Validation On Amount
    $('#loanAmountRange').on('change', function () {
        var amountMin = $("#loanAmtMin").html();
        var amountMax = $("#loanAmtMax").html();
        var amount = $('#loanAmountRange').val(); // get tenure text value
        console.log("Min", amountMin, "Max ", amountMax, "Actual ", amount);
        if (amount > parseInt(amountMax) || amount < parseInt(amountMin)) {
            alert("Amount should be more than " + amountMin + " or less than " + amountMax);
            $("#loanAmount").slider('setValue', 0);
            $('#loanAmountRange').val(0);
            $("#DepAmt").html(0);
            return false;
        } else {
            $("#loanAmount").slider('setValue', amount);
            $("#DepAmt").html(amount);
        }
    });

    $('#loanTenure').on("change", function () {
        console.log("In KeyUp Event");
        var tenureMax = $("#tenureMax").html();
        var tenureMin = $("#tenureMin").html();
        var tenure = $('#loanTenure').val(); // get tenure text value
        console.log("Actual", tenure, "Max ", tenureMax);
        if (tenure > parseInt(tenureMax) || tenure < parseInt(tenureMin)) {
            // alert('Tenure cannot more than '+ tenureMax)
            alert("Tenure should be more than " + tenureMin + " or less than " + tenureMax);
            $("#tenure").slider('setValue', 0);
            $('#loanTenure').val(0);
            $("#tenureVal").html(0);
            return false;
        } else {
            $("#tenure").slider('setValue', tenure);
            $("#tenureVal").html(tenure);
        }
    });

    $('#rateRange').keyup(function () {
        $("#rate").slider('setValue', $('#rateRange').val());
        $("#loanRate").html($('#rateRange').val())
    });

    $('#rateRange').on("change", function () {
        console.log("Rate KeyUp Event", $("#rateRange").val());
        var rate = $("#rateRange").val();
        var minRate = $("#intMin").html();
        var maxRate = $("#intMax").html();
        if (rate < parseInt(minRate) || rate > parseInt(maxRate)) {
            alert("Rate should be more than " + minRate + " or less than " + maxRate);
            $("#loanRate").html(0);
            $("#rateRange").val(0);
            $("#rate").slider('setValue', 0);
            return false;
        } else {
            $("#rate").slider('setValue', $('#rateRange').val());
            $("#intRate").html($('#rateRange').val())
        }
    });

    $("#loanAmount").slider();
    $("#loanAmount").on("change", function (slideEvt) {
        if (slideEvt.value.newValue > 0) {
            $("#loanAmountRange").val(slideEvt.value.newValue);
            document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
                "en-IN"
            ).format(slideEvt.value.newValue);
            //IntrestCal();
        }
    });

    $("#loanAmount").on("slide", function (slideEvt) {
        if (slideEvt.value > 0) {
            $("#loanAmountRange").val(slideEvt.value);
            document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
                "en-IN"
            ).format(slideEvt.value);
            //IntrestCal();
        }
    });

    $("#tenure").slider();
    $("#tenure").on("change", function (slideEvt) {
        console.log("Here");
        $("#loanTenure").val(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#loanTenure").val(slideEvt.value.newValue);
            $("#tenureVal").html(slideEvt.value.newValue);
        }
    });
    $("#tenure").on("slide", function (slideEvt) {
        $("#loanTenure").val(slideEvt.value);
        $("#tenureVal").html(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#loanTenure").val(slideEvt.value);
            $("#tenureVal").html(slideEvt.value.newValue);
            //IntrestCal();
        }
    });

    $("#rate").slider();
    $("#rate").on("change", function (slideEvt) {
        $("#rateRange").val(slideEvt.value.newValue);
        $("#loanRate").html(slideEvt.value.newValue);
        if (slideEvt.value.newValue > 0) {
            $("#rateRange").val(slideEvt.value.newValue);
            $("#loanRate").html(slideEvt.value.newValue);
            //IntrestCal();
        }
    });
    $("#rate").on("slide", function (slideEvt) {
        $("#rateRange").val(slideEvt.value);
        if (slideEvt.value > 0) {
            $("#rateRange").val(slideEvt.value);
            $("#loanRate").html(slideEvt.value.newValue);
            //IntrestCal();
        }
    });

    $('#btn_calculate').click(function () {
        console.log("Click ", $("#loanAmountRange").val());
        if ($("#loanAmountRange").val() > 0) {
            calculateHomeLoan();
        } else {
            alert("Please select required input.")
        }
    });

    // const range1 = document.querySelector("#range1")
    // range1.addEventListener("input", (event) => {
    //     console.log(event.target.value);
    // });

    $("a.bttn-link.reset-btn-calc").click(function (f9) {
        $("#range1").slider('setValue', 0);
        $("#range2").slider('setValue', 0);
        $("#range3").slider('setValue', 0);
        $('#range1Val,#range2Val,#range3Val').val(0);
        $("#MatAmt,#DepAmt,#IntErn").html(0);
        $("#MatDate").html('');

        f9.preventDefault();
    });

});

function IntrestCal() {
    var years = $("#range2").val() / 12 + $("#range3").val() / 365;
    var amount = $("#range1").val();
    // console.log("amount:" + amount);
    var percent = 0;
    var customerType = $('input[name="typeOfCustomer"]:checked').val();
	if (customerType == 1) { // Regular Customer Type
        years = parseFloat(years).toFixed(4);
        // console.log("Year ", years);
        if (years >= 0.0191 && years <= 0.0384) { // 7 days to 14 days
            percent = 3.50;
        } else if (years >= 0.0410 && years <= 0.1232 || years <= 0.1259) { // 15 days to 45 days
            percent = 4.00;
        } else if (years >= 0.1260 && years <= 0.2465) { // 46 days to 90 days
            percent = 4.50;
        } else if (years > 0.2493 && years <= 0.4931) { // 91 days to 180 days
            percent = 4.75;
        } else if (years >= 0.4958 && years <= 0.6575) { // 181 days to 240 days
            percent = 5.50;
        } else if (years >= 0.6602 && years <= 0.9972) { // 241 days to 364 days
            percent = 6.05;
        } else if (years >= 1 && years <= 1.2383) { // 365 days to 452 days (12 months to less than 15 months)
            percent = 7.50;
        } else if (years >= 1.2410 && years < 1.493) { // 453 days to 545 days (15 months to less than 18 months)
            percent = 7.80;
        } else if (years >= 1.495 && years <= 2) { // 546 days to 24 months (18 months to 24 months)
            percent = 8.00;
        } else if (years >= 2 && years <= 3) { // 24 months 1 day to 36 months
            percent = 7.50;
        } else if (years >= 3 && years <= 5) { // 36 months 1 day to 60 months 1 day
            percent = 7.10;
        } else if (years >= 5 && years <= 20) { // 60 months 2 days to 120 months
            percent = 7.00;
        } else if (years == 5) { //Tax Savings Fixed Deposits (60 months)
            percent = 7.10;
        } else {
            percent = 4;
        }
    } else if (customerType == 2) { // Senior Citizen Customer Type
        years = parseFloat(years).toFixed(4);
        // console.log("Year ", years);
        if (years >= 0.0191 && years <= 0.0384) { // 7 days to 14 days
            percent = 4;
        } else if (years >= 0.0410 && years <= 0.1232) { // 15 days to 45 days
            percent = 4.50;
        } else if (years >= 0.1260 && years <= 0.2465) { // 46 days to 90 days
            percent = 5;
        } else if (years > 0.2493 && years <= 0.4931) { // 91 days to 180 days
            percent = 5.25;
        } else if (years >= 0.4958 && years <= 0.6575) { // 181 days to 240 days
            percent = 6;
        } else if (years >= 0.6602 && years <= 0.9972) { // 241 days to 364 days
            percent = 6.55;
        } else if (years >= 1 && years <= 1.2383) { // 365 days to 452 days (12 months to less than 15 months)
            percent = 8.00;        
        } else if (years >= 1.2410 && years < 1.493) { // 453 days to 545 days (15 months to less than 18 months)
            percent = 8.30;
        } else if (years >= 1.495 && years <= 2) { // 546 days to 24 months (18 months to 24 months)
            percent = 8.50;
        } else if (years >= 2 && years <= 3) { // 24 months 1 day to 36 months
            percent = 8.00;
        } else if (years >= 3 && years <= 5) { // 36 months 1 day to 60 months 1 day
            percent = 7.60;
        } else if (years >= 5 && years <= 20) { // 60 months 2 days to 120 months
            percent = 7.50;
        } else if (years == 5) {
            percent = 7.60;
        } else {
            // percent = 5.75;
        }
    }


    // Get Type Of Deposit
    var depositType = $("#fixed-deposite1").val();
    console.log("Type ", depositType);
    var tempPercent = 0;
    if (depositType == 'Monthly Payout') {
        tempPercent = calculatePercent(percent);
        tempPercent = tempPercent.toFixed(4);
    } else {
        tempPercent = percent;
    }
    console.log("Latest Percent ", tempPercent);

    $("#Int").html(percent + '%');
    var interest = ((amount * tempPercent * years) / 100).toFixed(2);
    var MaturityAmt = (parseFloat(amount) + parseFloat(interest)).toFixed(2);
	
	// Set Maturity Amount
	if (depositType == 'Monthly Payout' || depositType == 'Quarterly Payout') {
		MaturityAmt = (parseFloat(amount));
	 } else {
        MaturityAmt = (parseFloat(amount) + parseFloat(interest)).toFixed(2);
    }

    document.getElementById("IntErn").innerHTML = new Intl.NumberFormat(
        "en-IN"
    ).format(Math.round(interest));

    document.getElementById("MatAmt").innerHTML = new Intl.NumberFormat(
        "en-IN"
    ).format(Math.round(MaturityAmt));

    const currDate = new Date();
    currDate.setDate(currDate.getDate() + parseInt($("#range3").val()));
    currDate.setMonth(currDate.getMonth() + parseInt($("#range2").val()));
    document.getElementById("MatDate").innerHTML = currDate.toLocaleDateString(
        "en-US", { year: "numeric", day: "numeric", month: "short" }
    );
}

function calculatePercent(B8) {
    var monthlyInterestRate = B8 / 12 / 100; // Convert annual interest rate to monthly
    var numPayments = 12; // Number of monthly payments
    var numerator = (B8 / 4) / (1 + (1 + monthlyInterestRate) + Math.pow(1 + monthlyInterestRate, 2));
    var denominator = 12;
    var monthlyPayment = numerator * denominator;
    return monthlyPayment;
}

function calculateHomeLoan() {
    var loanAmount = $("#loanAmountRange").val();
    var rateOfInterest = $("#rateRange").val();
    var numberOfMonths = $("#loanTenure").val();//(20*12);
    var moratorium = 0;
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;
    var months = numberOfMonths;
    var top = Math.pow((1 + monthlyInterestRatio), months);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;
    $("#emi").html("₹ " + Math.round(emi));
    // $("#tbl_int_pge").html(int_pge.toFixed(2) + " %");
    // $("#emi").html(inrFormat(emi));
    // $("#tbl_full").html(inrFormat(full));
    // $("#tbl_int").html(inrFormat(interest));
    var detailDesc = "<thead><tr><th colspan='6' style='background: #EAECF3;'><h6 class='p16'>Loan Calculation</h6></th></tr></thead> <thead><tr class='success'><th>Installment</th><th>Opening Balance</th><th>EMI</th><th>Principal</th><th>Monthly Interest</th><th>Closing Balance</th></thead><tbody>";
    var bb = parseInt(loanAmount),
        int_dd = 0,
        pre_dd = 0,
        end_dd = 0, emiAndInt = 0, totalInterestPreEmiLP = 0, totalPayOfLoan = 0;
    var jsonInt = [];
    var jsonPl = [];
    var labels = [];
    var emis = [];
    for (var j = 1; j <= numberOfMonths; j++) {
        var monthlyInterst = "";
        var MonthlyPrincipal = "";
        if (moratorium != 0 && moratorium >= j) {
            emiAndInt = PMT(rateOfInterest / 12, numberOfMonths, loanAmount, 0, 0)
            detailDesc += "<tr><td>" + j + "</td><td>₹ " + Math.round(bb) + "</td><td>₹ " + Math.round(emiAndInt) + "</td><td>0</td><td>₹ " + Math.round(emiAndInt) + "</td><td>₹ " + Math.round(bb) + "</td></tr>";
            totalInterestPreEmiLP = totalInterestPreEmiLP + emiAndInt;
            totalPayOfLoan = totalPayOfLoan + emiAndInt;
            labels.push(j);
            jsonInt.push(Math.round(emiAndInt));
            jsonPl.push(parseInt(0));
            emis.push(Math.round(emi));
        } else {
            int_dd = bb * ((rateOfInterest / 100) / 12);
            pre_dd = emi - int_dd;
            end_dd = bb - pre_dd;
            detailDesc += "<tr><td>" + j + "</td><td>₹ " + Math.round(bb) + "</td><td>₹ " + Math.round(emi) + "</td><td>₹ " + Math.round(pre_dd) + "</td><td>₹ " + Math.round(int_dd) + "</td><td>₹ " + Math.round(end_dd) + "</td></tr>";
            labels.push(j);
            jsonInt.push(Math.round(int_dd));
            jsonPl.push(Math.round(pre_dd));
            emis.push(Math.round(emi));
            bb = bb - pre_dd;
            totalInterestPreEmiLP = totalInterestPreEmiLP + int_dd;
            totalPayOfLoan = totalPayOfLoan + emi;
        }

    }
    detailDesc += "</tbody>";
    $("#illustrate").html(detailDesc);
    $("#illustrate").show();
}

