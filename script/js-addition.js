var displayDiv = document.getElementById("addition-result"),
    calculateBtn = document.getElementById("calculate-total-btn");

var addition = function addition(num1, num2) {
    var number1 = num1,
    number2 = num2,
    total = number1 + number2; 
    return total;   
}

calculateBtn.addEventListener("click", function() {    
    addition(10, 10);
    displayDiv.innerHTML = "<p>The result of the fumction above is: </p>" + total;        
});
    