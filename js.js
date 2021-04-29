document.getElementById("btn15").addEventListener("click",calc);
document.getElementById("btn175").addEventListener("click",calc);
document.getElementById("btn20").addEventListener("click",calc);
document.getElementById("btncalc").addEventListener("click",calc);
// document.getElementById("CA").addEventListener("change",calc);
document.getElementById("states").addEventListener("change",calc,false);
// document.getElementById("CO").addEventListener("click",calc);
// document.getElementById("DC").addEventListener("click",calc);
// document.getElementById("WA").addEventListener("click",calc);

let stateTaxVals = {
    "CA" : 0.1025,
    "CO" : 0.735,
    "DC" : 0.10,
    "WA" : 0.101
}

function calc(event){
    let tipPercent = 0;
    let buttonPressed = event.target.id;
    let taxPercent = stateTaxVals[document.getElementById('states').value];
    // let stateSelect = event.target.value;
    switch (buttonPressed){
        case "btn15":
            tipPercent = 0.15;
            break;
        case "btn175":
            tipPercent = 0.175;
            break;
        case "btn20":
            tipPercent = 0.20;
            break;
        case "btncalc":
            tipPercent = document.getElementById("customTip").value / 100;
    }

    let billAmount = document.getElementById("billAmount").value;
    billAmount = parseFloat(billAmount);
    taxPercent = parseFloat(taxPercent).toFixed(2);
    let tax = billAmount * taxPercent;
    let tip = billAmount * tipPercent;
    let total = tax + tip + billAmount;
    reportTotals(tax,tip,total);

    function reportTotals(tax, tip, total){
        document.getElementById("taxAmount").innerHTML = "<strong>$" + tax + "</strong>";
        document.getElementById("tipAmount").innerHTML = "<strong>$" + tip + "</strong>";
        document.getElementById("total").innerHTML = "<strong>$" + total + "</strong>";
    }
}
