const consultas = [
  { cpf: '111.222.333-44', valido: true },
  { cpf: '555.666.777-88', valido: false },
  { cpf: '999.000.111-22', valido: true },
  { cpf: '222.333.444-55', valido: false },
  { cpf: '333.444.555-66', valido: true }
];

const validos = consultas.filter (cpf => {
    return cpf.valido;
});

const cpfLimpo = consultas.map(cpf => { 
    return cpf.cpf.replace(/\D/g, "");
});

const quantidadeInvalidos = consultas.reduce((contador, cpf) => {
    if (!cpf.valido) {
        return contador + 1;
    }
    return contador;
}, 0);

const agrupados = consultas.reduce((contador, cpf) => {
    if (cpf.valido) {
        contador.valido += 1;
    } else {
        contador.invalido += 1;
    }
    return contador;
}, {valido: 0, invalido: 0});

console.log(validos, cpfLimpo, quantidadeInvalidos, agrupados);
console.log("-------------------novo exercicio-------------------")

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 32 },
    { nome: "Carlos", idade: 17 },
    { nome: "Diana", idade: 45 },
    { nome: "Elena", idade: 30 }
];

const deMaior = pessoas.reduce((contador, pessoas) => {
    if (pessoas.idade < 18) {
        contador.menor += 1;
    } else {
        contador.maior +=1;
    }
    return contador;
}, {maior: 0, menor: 0});

const nomesAdultos = pessoas.filter (pessoa => {
    return pessoa.idade >=18;
});
const nomes = nomesAdultos.map(pessoa => pessoa.nome);

const somaIdade = pessoas.reduce ((soma, pessoa) => {
   return soma + pessoa.idade; 
}, 0);
const idadeMedia = somaIdade / pessoas.length;


console.log(deMaior)
console.log(nomes)
console.log(idadeMedia)
