function firstNumber(min, max) {
    const fN = Math.random() * (max - min) + min;
    return Math.floor(fN);
}

function secondNumber(min, max) {
    const sN = Math.random() * (max - min) + min;
    return Math.floor(sN);
}

function sortear() {

    let firstN = firstNumber(1, 50);
    let secondN = secondNumber(1, 50);

    console.log(firstN);
    console.log(secondN);

    const inner = document.getElementById('highNumber');

    if (firstN > secondN) {
        inner.innerText = `esse é o primeiro ${firstN}`;
    } else {
        inner.innerText = `esse é o segundo ${secondN}`;
    }
}