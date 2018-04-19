function soma2(...valores) {
    return valores.reduce((soma, valor) => {return soma + valor},0);
}

//Operador R    EST
function soma(...valores) {

    let soma = 0;
    valores.forEach( numero  => soma += numero );

    return soma;
}

console.log(soma2(1));
console.log(soma2(1, 2));
console.log(soma2(1, 2 , 3));


function argumentos() {
    //console.log(arguments.length);
}

argumentos('teste');

/*function parametroObrigatorio(parametro) {
    throw new Error(`O parâmetro ${parametro} é obrigatório!`);
}

function inserir(objeto = parametroObrigatorio('objeto')) {
    
}

inserir();   

*/

/*function facaAlgoComMeuNome(nome, callback = z => { console.log(z); }) {
    callback(nome);
}

facaAlgoComMeuNome('Muriel'); // Muriel



function facaAlgoComMeuNome(nome, call = callBack) {
call(nome);
}

function callBack(nome) {
console.log(nome)
}


facaAlgoComMeuNome('Sergio');
*/