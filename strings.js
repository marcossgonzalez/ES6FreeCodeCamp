//-----------------------------------
/*Um novo recurso do ES6 é o modelo literal. Este é um tipo especial de string que facilita a criação de strings complexas.

Literais de modelo permitem criar strings multilinhas e usar recursos de interpolação de strings para criar strings.
EX:
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `(isso é uma crase ou acento grave e não um apostrofo) Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    let i = 0;
    let failureItems = [];
    do {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
        i++;
    } while (i < arr.length);
    console.log(failureItems);
    // Only change code above this line
    return failureItems;

}
//----------------------------------- 
const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name, age, gender
    };
    // Only change code above this line
};
//-----------------------------------
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
//-----------------------------------
