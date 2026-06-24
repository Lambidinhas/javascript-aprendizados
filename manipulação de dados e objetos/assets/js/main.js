const usuarios = [
    { id: 1, nome: "Ana", idade: 25, ativo: true, cidade: "São Paulo" },
    { id: 2, nome: "Carlos", idade: 17, ativo: true, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Beatriz", idade: 32, ativo: false, cidade: "São Paulo" },
    { id: 4, nome: "Diego", idade: 16, ativo: true, cidade: "Belo Horizonte" },
    { id: 5, nome: "Elena", idade: 29, ativo: true, cidade: "São Paulo" }
];

// QUESTÃO 1: Encontre o PRIMEIRO usuário que mora em "São Paulo" (Use o método .find()).
// QUESTÃO 2: Verifique se TODOS os usuários são maiores de idade (idade >= 18). (Use o método .every()).
// QUESTÃO 3: Verifique se EXISTE algum usuário que está inativo (ativo === false). (Use o método .some()).
// QUESTÃO 4: Crie um novo array contendo apenas os NOMES dos usuários que moram em "São Paulo". (Dica: Você pode encadear .filter() e .map() juntos!).

//Apenas 1°
const moraSp = usuarios.find (id => {
    return id.cidade === "São Paulo" ;
});
//se todos são de maior
const deMaior = usuarios.every (id => {
    return id.idade >= 18;
});
//ver se tem inativos
const temInativos = usuarios.some(function (usuarios){
    return usuarios.ativo === false;
});
//moram em SP
const nomesSp = usuarios 
    .filter(usuarios => usuarios.cidade === "São Paulo")
    .map(usuarios => usuarios.nome);
;

console.log(moraSp)
console.log(deMaior)
console.log(temInativos)
console.log(nomesSp)