const Button = document.getElementById('Btn')
const Result = document.getElementById('Result')
const Imc = document.getElementById('Imc')

console.log(Result)
    console.log(Imc)



Button.addEventListener("click", () => {

    const InputHeightCm = Number(document.getElementById('Height').value)
    const InputWeight = Number(document.getElementById('Weight').value)
    const InputHeight = InputHeightCm / 100
    const Calculation = InputWeight / (InputHeight * InputHeight) 
    

    if (InputHeight <= 0){
        Result.innerText = 'Digite uma altura válida'
        Result.style.color = 'red'
        return
    }
    if (InputWeight <= 0){
        Result.innerText = 'Digite um peso válido'
        Result.style.color = 'red'
        return
    }
    if (!Number.isInteger(InputHeightCm)) {
    Result.innerText = "Digite a altura sem ponto"
    return
    }
    if (InputHeightCm < 60 || InputHeightCm > 250) {
    Result.innerText = "Digite uma altura entre 60 e 250 cm"
    return
    }
    if (InputWeight < 20 || InputWeight > 300) {
    Result.innerText = "Digite um peso válido"
    return
    }

    Result.innerText = `Seu IMC é ${Calculation.toFixed(2)}`
    Result.style.color = 'black'
    
    if (Calculation >= 40){
        Imc.innerText = 'Obesidade grau 3'
        return        
    }
    if (Calculation >= 35){
        Imc.innerText = 'Obesidade grau 2'
        return        
    }
    if (Calculation >= 30){
        Imc.innerText = 'Obesidade grau 1'
        return        
    }
    if (Calculation >= 25){
        Imc.innerText = 'Sobre peso'
        return        
    }
    if (Calculation >= 18.6){
        Imc.innerText = 'Ideal'
        return        
    }
    if (Calculation <= 18.5){
        Imc.innerText = 'Abaixo do peso'
        return        
    }

    
    

    
})
