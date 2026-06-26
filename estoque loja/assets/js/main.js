const produtos = [
    { nome: "Teclado Mecânico", preco: 250, categoria: "Eletrônicos" },
    { nome: "Mouse Gamer", preco: 150, categoria: "Eletrônicos" },
    { nome: "Monitor 144hz", preco: 1200, categoria: "Eletrônicos" },
    { nome: "Cadeira Office", preco: 800, categoria: "Móveis" },
    { nome: "Mesa em L", preco: 600, categoria: "Móveis" },
    { nome: "Fone de Ouvido", preco: 100, categoria: "Eletrônicos" }
];

// OBJETIVO 1: Crie um novo array apenas com os produtos da categoria "Eletrônicos".
// OBJETIVO 2: Aplique um desconto de 10% em todos os produtos do array original e salve em um novo array chamado 'produtosComDesconto'.
// OBJETIVO 3: Calcule o valor total de todos os produtos juntos (o estoque total da loja).

const eletronics = produtos.filter (nome =>{ 
    return nome.categoria === "Eletrônicos";
});

const discount = produtos.map ((produto) => {
    const percent = produto.preco * 0.1;
    const priceNew = produto.preco - percent;
    return {
        nome: produto.nome,
        preco: priceNew,
        categoria: produto.categoria,
    };
});

const total = produtos.reduce ((soma, produtos) =>{
    return soma + produtos.preco;
}, 0);


console.log(eletronics)
console.log(discount)
console.log(total)

console.log("--------------novo exercio------------------------")

const vendas = [
    { cliente: "Huguinho", valor: 500, cupom: false },
    { cliente: "Zezinho", valor: 80, cupom: true },
    { cliente: "Luizinho", valor: 200, cupom: false },
    { cliente: "Pato Donald", valor: 1500, cupom: true },
    { cliente: "Margarida", valor: 300, cupom: false }
];

// 1. Filtre apenas as vendas acima de 100 reais.
// 2. Para essas vendas filtradas, aplique um desconto de 50 reais apenas se o cliente tiver cupom (cupom: true).
// 3. No final, some o valor total de todas essas vendas processadas.

const overHundred = vendas.filter ((vendas) =>{
    return vendas.valor >= 100;
});
const underHundred = vendas.filter ((vendas) => {
    return vendas.valor < 100;
})

const afterDiscount = vendas
    .filter(venda => venda.valor >= 100)
    .map(venda => {
        return {
            ...venda,
            valor: venda.valor - 50
        };
    });


const totalAfter = [...afterDiscount, ...underHundred];

const totalVendas = totalAfter.reduce((acumulador, venda) =>{
    return acumulador + venda.valor;
}, 0)
   
    
console.log(overHundred)
console.log(afterDiscount)
console.log(totalVendas)