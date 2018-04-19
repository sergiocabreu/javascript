var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

var iterador = bruxos[Symbol.iterator]();
//iterador.next();
//iterador.next();
//iterador.next();


let nome = 'Sergio';
var iterador = nome[Symbol.iterator]();
console.log(iterador.next());