/* -----------------------FOR...OF------------------------------------- */
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( var numero of numeros) {
    //console.log(numero);
}

/* -----------------------FOR...IN------------------------------------- */
var perfil = {
    nome: 'Carlo',
    idade: 22
}

for (var propriedade in perfil) {
    console.log(propriedade);
    var info = perfil[propriedade];
    console.log(info);
}





/* -----------------------REDUCE------------------------------------- */

var numeros = [1, 2, 3, 4, 5];

var soma = 0;
soma = numeros.reduce(function(soma, numero){
    return soma + numero;
}, 0);

//console.log(soma);




/* -----------------------SOME------------------------------------- */
var pesoDasMalas = [12, 32, 21, 29];

var temMalaAcimaDoPeso = pesoDasMalas.some(function(peso){
    return peso > 30;
});

//console.log(temMalaAcimaDoPeso);







/* -----------------------EVERY------------------------------------- */
var alunos = [
    {nome:'joão', idade: 18},
    {nome:'maria', idade: 20},
    {nome:'pedro', idade: 24}
];

var todosAlunosDeMaior = alunos.every(function(aluno){
    return aluno.idade > 17;
});

//console.log(todosAlunosDeMaior);


/* -----------------------FIND------------------------------------- */

var alunos = [
    {nome:'joão'},
    {nome:'josé'},
    {nome:'maria'}
    ];

var aluno = alunos.find(function(aluno){
    return aluno.nome === 'josé';
});

//console.log(aluno);


/* -----------------------FILTER------------------------------------- */

var alunos = [
    {nome:'joão', idade:15},
    {nome:'josé', idade:18},
    {nome:'maria', idade:20}
];

var alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade > 17;
});

//console.log(alunos);
//console.log(alunosDeMaior);




/* -----------------------MAP------------------------------------- */

var numeros = [1, 2, 3];

var dobro = numeros.map(function(numero) {
    return numero * 2;
});

//console.log(numeros);
//console.log(dobro);


/* --------------------------FOREACH---------------------------------- */
//exemploForEach();
//exemploForEach2();

function exemploForEach() {
    var nomes = ['Maria', 'José', 'João'];
    nomes.forEach(function(nome){
        console.log(nome);
    });
}

function exemploForEach2() {
    var nomes = ['Maria', 'José', 'João'];

    nomes.forEach(imprimeNome);

    function imprimeNome(nome) {
        console.log(nome);
    }
}

