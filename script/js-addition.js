var displayDiv = document.getElementById("addition-result"),
calculateBtn = document.getElementById("calculate-total-btn");

var addition = function addition(num1, num2) {
    var number1 = parseInt(num1);
    var number2 = parseInt(num2);
    var total = number1 + number2;    
    return total;   
}


calculateBtn.addEventListener("click", function() {    
    addition();
    displayDiv.innerHTML = "<p>The result of the fumction above is: </p>" + total;        
});
    