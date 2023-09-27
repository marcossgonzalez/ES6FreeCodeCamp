//-----------------------------------
//Para nos ajudar a criar funções mais flexíveis, o ES6 introduz parâmetros padrão para funções.
//Ex: const func = (name = "Anom") =>{return "Hello" + name;}
//-----------------------------------
// Only change code below this line
const increment = (number = number + 1, value = 1) => number + value;
// Only change code above this line
//-----------------------------------
const sum = (...args) => {
    args;
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
//-----------------------------------
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
//-----------------------------------