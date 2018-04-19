function log (valor) {
    console.log(valor);
}

//let nome = 'Sérgio';
//let mensagem = `Hello ${nome}`;

//log(mensagem);


const horas = new Date().getHours();
const mensagem = defineMensagem`${""}${horas} horas.`;

function defineMensagem(strings, ...parametros) {

    log(strings);
    log(parametros);


    const hora = parametros[1];

    if(hora >= 6 && hora <= 12) {
        parametros[0] = "Bom dia, são";
    } else if (hora > 12 && hora <= 18) {
        parametros[0] = "Boa tarde, são";
    } else {
        parametros[0] = "Boa noite, são";
    }

    return `${parametros[0]} ${parametros[1]}${strings[2]}`;
}

log(mensagem);

