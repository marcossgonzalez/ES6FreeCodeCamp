//----------------------------------------
/*Imagine um arquivo chamado math_functions.js que contém diversas funções relacionadas a operações matemáticas.
Um deles é armazenado em uma variável, add, que recebe dois números e retorna sua soma.
Você deseja usar esta função em vários arquivos JavaScript diferentes.
Para compartilhá-lo com esses outros arquivos, primeiro você precisa exportá-lo.

ex:
export const add = (x, y) => {
  return x + y;
}
você também pode realizar a mesma exportação do seguinte método:
const add = (x, y) => {
  return x + y;
}

export { add };

*/
//----------------------------------------
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  export {uppercaseString};
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  export {lowercaseString};
//----------------------------------------
/*import permite que você escolha quais partes de um arquivo ou módulo carregar. 
Na lição anterior, os exemplos exportados foram adicionados do arquivo math_functions.js. 
Veja como você pode importá-lo para usar em outro arquivo:
import { add } from './math_functions.js';
*/
//----------------------------------------
// Only change code above this line
import {uppercaseString, lowercaseString} from './string_functions.js'
uppercaseString("hello");
lowercaseString("WORLD!");
//----------------------------------------
/*Suponha que você tenha um arquivo e queira 
importar todo o seu conteúdo para o arquivo atual. 
Isso pode ser feito com a sintaxe 'import * as'.
Ex:
import * as myMathModule from "./math_functions.js";

e para as funções serem usadas:
myMathModule.add(2,3);
myMathModule.subtract(5,3);*/
//----------------------------------------
