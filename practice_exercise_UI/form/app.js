var submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', function () {
    var firstName = document.querySelector("#first_name");
    var middleName = document.querySelector("#middle_name");
    var lastName = document.querySelector("#last_name");
    var result = document.querySelector("#result");
    result.innerText = "Hi ".concat(lastName.value, ", ").concat(firstName.value, " ").concat(middleName.value);
});
