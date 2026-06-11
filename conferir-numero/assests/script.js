const inner = document.getElementById('result')
const btn = document.getElementById('btn')

btn.addEventListener("click", () =>{

    const number = Number(document.getElementById('number').value)

    if (number === 0) {
        inner.innerText = `Ele não é divisivel por 3 e 5`;
        return;
    }
    if (number % 3 === 0 && number % 5 === 0) {
        inner.innerText = `Ele é divisivel por 3 e 5`;
        return;
    }
    if (number % 5 === 0) {
        inner.innerText = `Ele é divisivel por 5`;
        return;
    }
    if (number % 3 === 0) {
        inner.innerText = `Ele é divisivel por 3`;
        return;
    }
    if (!number % 3 === 0 && !number % 5 === 0) {
        inner.innerText = `Ele não é divisivel por 3 e 5`;
        return;
    }

})