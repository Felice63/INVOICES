// Need to define the four variables that will store the input values from the job amounts the input values.

function calcBtn() {
    let job_1_amt = parseFloat(document.getElementById("amt-1").value);
    let job_2_amt = parseFloat(document.getElementById("amt-2").value);
    let job_3_amt = parseFloat(document.getElementById("amt-3").value);
    let job_4_amt = parseFloat(document.getElementById("amt-4").value);
    
    // Define the subtotal as the sum of the four job amounts:
    let subtotal = parseFloat(document.getElementById("subTTL").value);
    
    // Define HST is 13 % times the subtotal
    let hst = document.getElementById("hst").value;
    
    // total is the sum of subtotal and hst
    let total = document.getElementById("total").value
    
    subtotal = job_1_amt + job_2_amt + job_3_amt + job_4_amt;
    
    hst = subtotal * (13 / 100);
    
    total = subtotal + hst;
    
    // Display the subtotal
    document.getElementById("subTTL").innerHTML = subtotal.toFixed(2);
    
    // Display the HST amount
    document.getElementById("hst").innerHTML = hst.toFixed(2);
    
    // Display the TOTAL amount
    document.getElementById("total").innerHTML = total.toFixed(2);
    
    console.log(job_1_amt.toFixed(2), job_2_amt.toFixed(2), job_3_amt.toFixed(2), job_4_amt.toFixed(2), subtotal.toFixed(2), hst.toFixed(2), total.toFixed(2));
}

 //click to call function here instead of using the onClick() method in the HTML
document.getElementById("calcButton").onclick = function() {
    calcBtn();
  }


