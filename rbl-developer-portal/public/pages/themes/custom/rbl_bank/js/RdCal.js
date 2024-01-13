$('#range1RdVal').keyup(function () {
	$("#range1Rd").slider('setValue', $('#range1RdVal').val());
	$("#DepAmt").html($('#range1RdVal').val());
	RdIntrestCal();
});

$('#range2RdVal').keyup(function () {
	$("#range2Rd").slider('setValue', $('#range2RdVal').val());
	RdIntrestCal();
});

// Slider
$("#range1Rd").slider();
$("#range1Rd").on("change", function (slideEvt) {
	console.log("In Change", slideEvt.value.newValue);
	if (slideEvt.value.newValue > 0) {
		console.log("In IF", slideEvt.value.newValue);
		$("#range1RdVal").val(slideEvt.value.newValue);
		document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
			"en-IN"
		).format(slideEvt.value.newValue);
		RdIntrestCal();
	}
});

$("#range1Rd").on("slide", function (slideEvt) {
	if (slideEvt.value > 0) {
		$("#range1RdVal").val(slideEvt.value);
		document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
			"en-IN"
		).format(slideEvt.value);
		RdIntrestCal();
	}
});

$("#range2Rd").slider();
$("#range2Rd").on("change", function (slideEvt) {
	$("#range2RdVal").val(slideEvt.value.newValue);
	if (slideEvt.value.newValue > 0) {
		$("#range2RdVal").val(slideEvt.value.newValue);
		RdIntrestCal();
	}
});

$("#range2Rd").on("slide", function (slideEvt) {
	$("#range2RdVal").val(slideEvt.value);
	if (slideEvt.value > 0) {
		$("#range2RdVal").val(slideEvt.value);
		RdIntrestCal();
	}
});

// Validation On Amount 
$('#range1RdVal').on('change', function () {
    var amountMin = $("#loanAmtMin").html();
    var amountMax = $("#loanAmtMax").html();
    var amount = $('#range1RdVal').val(); // get tenure text value
    console.log("Min", amountMin, "Max ", amountMax, "Actual ", amount);
    if (amount > parseInt(amountMax) || amount < parseInt(amountMin)) {
        alert("Amount should be more than " + amountMin + " or less than " + amountMax);
        $("#range1Rd").slider('setValue', 0);
        $('#range1RdVal').val(0);
        $("#DepAmt").html(0);
        $("#MatAmt").html(0);
        $("#IntErn").html(0);
        return false;
    } else {
        $("#range1Rd").slider('setValue', amount);
        $("#DepAmt").html(amount);
    }
});

$('#range2RdVal').on('change', function () {
    console.log("In KeyUp Event");
    var tenureMax = $("#tenureMax").html();
    var tenureMin = $("#tenureMin").html();
    var tenure = $('#range2RdVal').val(); // get tenure text value
    console.log("Actual", tenure, "Max ", tenureMax);
    if (tenure > parseInt(tenureMax) || tenure < parseInt(tenureMin)) {
        alert("Tenure should be more than " + tenureMin + " or less than " + tenureMax);
        $("#range2Rd").slider('setValue', 0);
        $('#range2RdVal').val(0);
        $("#range2RdVal").html(0);
        $("#DepAmt").html(0);
        $("#MatAmt").html(0);
        $("#IntErn").html(0);
        return false;
    } else {
        $("#range2Rd").slider('setValue', tenure);
        $("#range2RdVal").html(tenure);
    }
});

// Customer Type Radio Button
$("input[name='typeOfCustomer']").change(function () {
    $("#range1Rd").slider('setValue', 0);
    $("#range2Rd").slider('setValue', 0);
    $('#range1RdVal,#range2RdVal').val(0);
    $("#MatAmt,#DepAmt,#IntErn").html(0);
    $("#MatDate").html('');
});

 // Event for reset button
 $(".reset-btn-calc").click(function () {
    $("#range1Rd").slider('setValue', 0);
    $("#range2Rd").slider('setValue', 0);
    $('#range1RdVal,#range2RdVal').val(0);
    $("#MatAmt,#DepAmt,#IntErn").html(0);
    $("#MatDate").html('');
});

function calculateMonthlyPayment(B8) {
    var monthlyInterestRate = B8 / 12 / 100; // Convert annual interest rate to monthly
    var numPayments = 12; // Number of monthly payments
    var numerator = (B8 / 4) / (1 + (1 + monthlyInterestRate) + Math.pow(1 + monthlyInterestRate, 2));
    var denominator = 12;
    var monthlyPayment = numerator * denominator;
    return monthlyPayment;
}



// RD Calculator
function RdIntrestCal() {
    var years = $("#range2Rd").val() / 12 + $("#range3").val() / 365;
    var months = $("#range2Rd").val();
    var amount = $("#range1Rd").val();
    var investedAmt = (parseFloat(amount) * parseFloat(months)).toFixed(2);
    // $("#DepAmt").html(investedAmt);
    document.getElementById("DepAmt").innerHTML = new Intl.NumberFormat(
        "en-IN"
    ).format(investedAmt);
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

    var tempPercent = calculateMonthlyPayment(percent);
    var percentCal = tempPercent.toFixed(4);

    $("#Int").html(percent + '%');
    var interest = ((amount * percent * years) / 100).toFixed(2);
    // var MaturityAmt = (parseFloat(amount) + parseFloat(interest)).toFixed(2);
    // var MaturityAmt = (parseFloat(amount) + parseFloat(investedAmt)).toFixed(2);
    // MaturityAmt = (parseFloat(100000)*(1+6.5/4)^(4*12));
    // M = P*(1+R/N)^Nt
    var MaturityAmt = calcualte_recurring_deposit_amount(amount, percentCal, months);
    console.log(MaturityAmt);

    var intAmt = (parseFloat(MaturityAmt) - parseFloat(investedAmt));
    console.log("Int ", intAmt);
    document.getElementById("IntErn").innerHTML = new Intl.NumberFormat(
        "en-IN"
    ).format(intAmt);
    // $("#IntErn").html(intAmt);

    document.getElementById("MatAmt").innerHTML = new Intl.NumberFormat(
        "en-IN"
    ).format(MaturityAmt);

    const currDate = new Date();
    currDate.setDate(currDate.getDate() + parseInt($("#range3").val()));
    currDate.setMonth(currDate.getMonth() + parseInt($("#range2Rd").val()));
    document.getElementById("MatDate").innerHTML = currDate.toLocaleDateString(
        "en-US", { year: "numeric", day: "numeric", month: "short" }
    );
}

function calculate_months_in_year(t) {
    return t / 12;
}

function calculate_x(r, n) {
    var x = 1 + (r / 100) / n;
    //console.log(x);
    return x;
}

function calcualte_recurring_deposit_amount(deposit_amount_P, interest_rate_r, number_of_years_t) {
    var p = deposit_amount_P;
    var t = number_of_years_t;
    var n = 12;
    var r = interest_rate_r;
    var amount_array = [];
    var x = calculate_x(r, n);

    for (var i = t; i >= 1; i--) {
        a = p * Math.pow(x, n * calculate_months_in_year(i));
        console.log(a);
        amount_array.push(a);
    }
    var maturity_amount = amount_array.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    });
    return Math.round(maturity_amount);
}
