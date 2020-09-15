//import{ soma, sub } from './funcoes'
//import somafunction from './soma'
import { soma as somaFunction, sub} from './funcoes'
import * as funcoes from './funcoes'

console.log('Tete de importação de modulos 5+20: '+ somaFunction(5,20));

console.log('Tete de importação de modulos 20-5: '+ sub(20, 5));

console.log(funcoes);


console.log('Tete de importação de modulos 5+20: '+ funcoes.soma(5,20));

console.log('Tete de importação de modulos 20-5: '+ funcoes.sub(20, 5));
