let display = document.querySelector(".display");

let btn = Array.from(document.querySelectorAll(".button"));
//console.log(btn);
btn.map(button => {
    button.addEventListener('click', (i) => {
        /*console.log(i);
        console.log(i.target);
        console.log(i.target.innerText);
        */
        switch (i.target.innerText) {
            case 'AC':
                display.innerText = " ";
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Invalid Expression";
                    setTimeout(() => { display.innerText = " " }, 2000);
                }
                break;
            default:
                display.innerText += i.target.innerText

        }
    });
});