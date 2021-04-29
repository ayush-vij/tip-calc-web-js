document.getElementById("btn15").addEventListener("click",calc);
document.getElementById("btn175").addEventListener("click",calc);
document.getElementById("btn20").addEventListener("click",calc);
document.getElementById("btncalc").addEventListener("click",calc);

function calc(event){
    let tipPercent = 0;
    let buttonPressed = event.target.id;

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
    let tip = billAmount * tipPercent;
    let total = tip + billAmount;
    reportTotals(tip,total);

    function reportTotals(tip, total){
        document.getElementById("tipAmount").innerHTML = "<strong>$" + tip + "</strong>";
        document.getElementById("total").innerHTML = "<strong>$" + total + "</strong>";
    }
}
