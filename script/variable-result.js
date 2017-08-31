var input,
    inputResponse,
    displayDiv = document.getElementById("variable-result"),
    viewResultlsBtn = document.getElementById("calculate-total-btn");

var getResponse = function getResponse(answer) {
    input = answer;
    return input;
}
    inputResponse = input;
    
    viewResultlsBtn.addEventListener("click", function() {
        getResponse(hey);
        displayDiv.innerHTML = "<p>Here is the result of the above fumction: </p>" + inputResponse;
});    