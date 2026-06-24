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