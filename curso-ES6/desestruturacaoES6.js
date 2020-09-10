const usuario = {
    nome : 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const { nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade, cidade);


function mostraCaracteristicas({nome, idade}){
    console.log(nome, idade);
}

mostraCaracteristicas(usuario);