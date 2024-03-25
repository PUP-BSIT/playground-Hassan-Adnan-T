var addButton = document.querySelector("#add_button");
var result = document.querySelector("#result");
addButton.addEventListener('click', function () {
    var input1 = document.querySelector("#input1");
    var input2 = document.querySelector("#input2");
    var answer = add(+input1.value, +input2.value);
    result.innerText = "Result: ".concat(answer);
});
function add(input1, input2) {
    var answer = input1 + input2;
    return answer;
}
