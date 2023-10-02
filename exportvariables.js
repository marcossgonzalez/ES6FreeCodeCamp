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