const submitButton = document.querySelector("#submit") as HTMLButtonElement;

submitButton.addEventListener('click' ,() => {
    const firstName = document.querySelector("#first_name") as HTMLInputElement;
    const middleName = document.querySelector("#middle_name") as HTMLInputElement;
    const lastName = document.querySelector("#last_name") as HTMLInputElement;
    const result = document.querySelector("#result") as HTMLElement;
    result.innerText = `Hi ${lastName.value}, ${firstName.value} ${middleName.value}`
})