const botao = document.getElementById("botao")
const resultadoEL = document.getElementById("resposta")
const imc = document.getElementById("IMC")

botao.addEventListener("click", () => {

    const peso = Number(document.getElementById("peso").value)
    const altura = Number(document.getElementById("altura").value)
    

    if (!altura){
        resultadoEL.innerText = 'QUAL SUA ALTURA'
        resultadoEL.style.color = 'red'
        return
    }
    if (!peso){
        resultadoEL.innerText = 'QUAL SEU PESO?'
        resultadoEL.style.color = "red"
        return
    }
    const calculo = altura* altura
    const resposta = (peso / calculo) * 10000
    resultadoEL.innerText = `${resposta.toFixed(2)}`

    if (resposta < 18.5) {
        imc.innerText = 'ABAIXO DO PESO IDEAL'
    }
    else if (resposta >= 18.6 && resposta <= 24.9) {
        imc.innerText = 'IDEAL'
    }
    else if (resposta >= 25 && resposta <= 29.9) {
        imc.innerText = 'EXECESSO DE PESO'
    }
    else if (resposta >= 30 && resposta <= 34.9) {
        imc.innerText = 'OBESIDADE GRAU 1'
    }
    else if (resposta >= 35 && resposta <= 39.9) {
        imc.innerText = 'OBESIDADE GRAU 2'
    }
    else if (resposta >= 40) {
        imc.innerText = 'OBESIDADE GRAU 3'
    }
})