var input,
    displayDiv = document.getElementById("variable-result"),
    viewResultsBtn = document.getElementById("calculate-total-btn");

var getResponse = function getResponse() {
    input = "Welcome to JavaScript!";
    return input;
}
    viewResultsBtn.addEventListener("click", function() {
        // var getInput = input;
        getResponse();
        displayDiv.innerHTML = "<p>Here is the result of the above function: </p>" + input;
});    