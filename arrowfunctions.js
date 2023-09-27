//-----------------------------------
//Para escrever funções anônimas dessa forma, você pode usar a sintaxe da função de seta:
//const myFunc = () => {
//    const myVar = "value";
//    return myVar;
//  }
//-----------------------------------
const magic = () => {
    return new Date();
  };
//-----------------------------------
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
//-----------------------------------
