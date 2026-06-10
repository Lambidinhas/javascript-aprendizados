const historico = []


const botao = document.getElementById("convert")
const resultadoEl = document.getElementById("resultado")

botao.addEventListener("click", async () => {

    const valor = Number(document.getElementById("valor").value)
    const de = document.getElementById("de").value
    const para = document.getElementById("para").value

    if (!valor) {
        resultadoEl.innerText = "Digite um valor válido"
        resultadoEl.style.color = "red"
        return
    }

    if (de === para) {
        resultadoEl.innerText = "Escolha moedas diferentes"
        resultadoEl.style.color = "red"
        return
    }

    resultadoEl.innerText = "Convertendo..."
    resultadoEl.style.color = "#000"

    try {
        const resposta = await fetch(`https://api.exchangerate-api.com/v4/latest/${de}`)
        const dados = await resposta.json()

        const taxa = dados.rates[para]
        const resultado = valor * taxa 

        resultadoEl.innerText = `${valor} ${de} = ${resultado.toFixed(2)} ${para}`

            /*historico*/
    historico.push(`${valor} ${de} -> ${resultado.toFixed(2)} ${para}`)
    const historicoEl = document.getElementById("historico")

    historicoEl.innerHTML = historico
    .map(item => `<p>${item}</p>`)
    .join("")
    } catch (erro) {
        resultadoEl.innerText = "Erro ao buscar cotação"
        resultadoEl.style.color = "red"
    }
    document.getElementById("valor").value = ""

    
    
}) 



const inverter = document.getElementById("inverter")

inverter.addEventListener("click", () => {

    const deSelect = document.getElementById("de")
    const paraSelect = document.getElementById("para")

    const temp = deSelect.value
    deSelect.value = paraSelect.value
    paraSelect.value = temp
    
}
)

