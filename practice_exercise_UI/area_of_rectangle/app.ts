const calculateButton = document.querySelector("#calculate_button") as HTMLButtonElement;

calculateButton.addEventListener('click', () => {
    const width = document.querySelector("#input1") as HTMLInputElement;
    const length = document.querySelector("#input2") as HTMLInputElement;
    let result = document.querySelector("#result") as HTMLElement;
    const answer = calculateArea(+width.value,+length.value);
    
    result.innerText = `The Area of the rectangle with ${width.value} 
        width and ${length.value} length is ${answer}`
})

function calculateArea(width : number, length : number): number{
    return (width * length);
}