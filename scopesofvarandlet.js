//-----------------------------------
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
//-----------------------------------
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  for (let i = 0; i < s.length; i++) {
    let k = [2, 5, 7];
    for (let j = 0; j < k.length; j++) {
      s[j] = k[j];
    }
  }
  // Only change code above this line
}
editInPlace();
//-----------------------------------
/*Como visto no desafio anterior, a declaração const por si só não protege realmente seus dados contra mutações. 
Para garantir que seus dados não sejam alterados, o JavaScript fornece uma função 'Object.freeze' para evitar a mutação dos dados.*/
//-----------------------------------
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//-----------------------------------