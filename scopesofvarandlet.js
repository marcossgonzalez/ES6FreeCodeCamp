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
  for (let i = 0; i<s.length; i++){
    let k = [2, 5, 7];
    for (let j = 0; j<k.length; j++){
      s[j] = k[j];
  }}
  // Only change code above this line
}
editInPlace();
//-----------------------------------