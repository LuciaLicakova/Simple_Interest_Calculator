function compute()
{
    // get the values from input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    // to display the future time as an actual year
    var year = new Date().getFullYear()+parseInt(years);
    // if amount - principal hasn't been entered
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // compute the interest
    else {
    document.getElementById("result").innerHTML="If you deposit "+principal+
    "\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>you will receive an amount of <strong>"+interest+
    "</strong>\<br\>in the year "+year+"\<br\>";
    }
}
function updateRate()
{
    // update the value of the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
