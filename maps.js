function log(parametro) {
    console.log(parametro);
}

var map = new Map();
function funcao(){};
var objeto = {};

map.set("string", "sou uma string.");
map.set(funcao, "sou uma função.");
map.set(objeto, "sou um objeto.");

log(map.get("string"));
log(map.get(objeto));
log(map.get(funcao));

log(map.size);

log(map.has("string"));
log(map.has("abc"));

log(map.delete("string"));
log(map.size);

map.clear()
log(map.size);


var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('três', 3);

for (var chave of mapa.keys()) {
    log(chave);
}

for(var valor of mapa.values()) {
    log(valor);
}

//WEAKMAPS
var weakMaps = new WeakMap();
function funcao(){};
var objeto = {};

weakMaps.set(funcao, "isso é uma funcao");
weakMaps.set(objeto, "isso é um objeto");


function Pessoa(nome) {
    this._nome = nome;
}

Pessoa.prototype.getNome = function() {
    return this._nome;
}

var sergio = new Pessoa('Sergio');
log(sergio._nome);
log(sergio.getNome());


//Uma truque para esconder atributos privates.
var People = ( function () {
    var dadosPrivados = new WeakMap();

    function People(nome) {
        dadosPrivados.set(this, {nome: nome})
    }

    People.prototype.getNome = function() {
        return dadosPrivados.get(this).nome;
    };

    return People;
}());

var rafael = new People('Rafael');
log(rafael.getNome());
log(rafael._nome);
