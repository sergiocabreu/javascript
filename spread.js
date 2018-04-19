console.log('spread');

const mae = ['leite', 'ovos', 'papel'];
console.log(mae);

const esposa = ['arroz', 'feijão', 'suco'];
console.log(esposa);

const compras = [...mae, ...esposa];
console.log(compras);



const carrinho = ['produdo1', 'produto2', 'produto3'];
console.log(carrinho);
const carrinhoAtualizado = [...carrinho, 'produto4'];
console.log(carrinhoAtualizado);

for (let produto of carrinhoAtualizado) {
    console.log(produto);
}

let nome = "sergio";
console.log(nome); 
const letras = [...nome];
console.log(letras);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//soma=55

function soma(numeros) {
    let soma = 0;
    for(let numero of numeros) {
        soma += numero;
    }
    console.log(soma);
}

soma(numeros);