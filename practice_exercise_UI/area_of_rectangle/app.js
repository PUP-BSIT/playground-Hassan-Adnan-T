var calculateButton = document.querySelector("#calculate_button");
calculateButton.addEventListener('click', function () {
    var width = document.querySelector("#input1");
    var length = document.querySelector("#input2");
    var result = document.querySelector("#result");
    var answer = calculateArea(+width.value, +length.value);
    result.innerText = "The Area of the rectangle with ".concat(width.value, " width and ").concat(length.value, " length is ").concat(answer);
});
function calculateArea(width, length) {
    return (width * length);
}
