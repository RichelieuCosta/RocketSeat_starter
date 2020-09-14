//REST

function testeRest(){
    const usuario2 = {
        nome : 'Richelieu',
        idade : 26,
        empresa : 'UFPB'
    };

    const { idade, ...resto} = usuario2;

    console.log(idade);
    console.log(resto);


    const array_for_rest = [1, 2, 3, 4, 5, 6];

    const [ a, b, ...c] = array_for_rest; 
    console.log(a);
    console.log(b);
    console.log(c);

}

testeRest();

function teste_soma_rest(a, b, ...params){

    return a + b + params.reduce((total, next) => total+ next);

}

console.log(teste_soma_rest(1,2,3,4,5,6,7,8,9,10))