// SPREAD

function testeSPREAD(){


    const arr1 = [1, 2, 3];
    const arr2 = [ 4, 5, 6];

    const arr3 = [...arr1, ...arr2];

    console.log(arr3);

    const usuario1 = {
        nome : 'Richelieu',
        idade: 26,
        endereco: {
            cidade: 'João Pessoa',
            estado: 'PB'
        },
    };


    const usuario2 = {
        nome : 'Lucas',
        idade: 22,
        endereco: {
            cidade: 'Montreal',
            estado: 'Quebec'
        },
    };

    const usuario3={...usuario2, nome:'Marilia', idade : 23};
    
    console.log(usuario1);
    console.log(usuario3);

    console.log(`A cidadã ${usuario3.nome} tem ${usuario3.idade} e mora em ${usuario3.endereco.cidade}`);
}

testeSPREAD();