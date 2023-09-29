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
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
//-----------------------------------
const HIGH_TEMPERATURES2 = {
  yesterday3: 75,
  today3: 77,
  tomorrow3: 80
};

// Only change code below this line

const { today3: highToday3 } = HIGH_TEMPERATURES2;
const { tomorrow3: highTomorrow3 } = HIGH_TEMPERATURES2;

// Only change code above this line
//-----------------------------------
const LOCAL_FORECAST = {
  yesterday2: { low: 61, high: 75 },
  today2: { low: 64, high: 77 },
  tomorrow2: { low: 68, high: 80 }
};

// Only change code below this line

const { today2: { low: lowToday2 } } = LOCAL_FORECAST;
const { today2: { high: highToday2 } } = LOCAL_FORECAST;

// Only change code above this line
//-----------------------------------
let a = 8, b = 6;
// Only change code below this line
[b, a] = [a, b]
//-----------------------------------
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo)
//-----------------------------------
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) =>
  (max + min) / 2.0;
// Only change code above this line
//-----------------------------------