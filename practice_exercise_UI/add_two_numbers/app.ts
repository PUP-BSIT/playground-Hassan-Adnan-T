const addButton = document.querySelector("#add_button") as HTMLButtonElement;
const result = document.querySelector("#result") as HTMLElement;

addButton!.addEventListener('click', () =>{
    const input1 = document.querySelector("#input1") as HTMLInputElement;
    const input2 = document.querySelector("#input2") as HTMLInputElement;
    const answer = add(+input1.value, +input2.value);
    result.innerText = `Result: ${answer}`;
})

function add(input1:number, input2:number):number{
    let answer = input1 + input2;
    return answer;
}