const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// _____________________________Spread operator_____________________________

console.log(...numbersOne);

// Pour copier un tableau
const numbersOneCopie = [...numbersOne];
console.log(numbersOneCopie);

// Pour concaténer deux tableaux
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// En paramètres d'une fonction
const add = (...numbers) => {
  let result = 0;
  numbers.forEach((number) => (result += number));

  return result;
};

console.log(add(1, 2, 4, 5, 6));

// _____________________________Destructuration (sur les tableaux)_____________________________
const cars = () => {
  return ["mustang", "ferrari", "tesla"];
};

const cars2 = ["mustang", "ferrari", "tesla"];

const [car1, car2, car3] = cars();
console.log("car1", car1);
console.log("car2", car2);
console.log("car3", car3);

// Equivalent sans destructuration :
// const car1 = cars()[0]
// const car2 = cars()[1]
// const car3 = cars()[2];

const [car4, car5, car6] = cars2;
console.log("car4", car4);
console.log("car5", car5);
console.log("car6", car6);

const calculate = (a, b) => {
  const add = () => a + b;
  const substract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return [add, substract, multiply, divide];
};

const [somme, soustraction] = calculate(8, 2);
console.log(somme());
console.log(soustraction());

const [, , , divide] = calculate(8, 2);
console.log(divide());

// _____________________________Destructuration + spreadOperator_____________________________

const numbers = [1, 2, 3, 4, 5];
const [num1, num2, ...rest] = numbers;

console.log("rest = ", rest);

// _____________________________Destructuration (sur les objets)_____________________________
const person = { name: "John", age: 30, city: "New York" };

const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

const { city: ville } = person;
console.log(ville);

const calculate2 = (a, b) => {
  const add = () => a + b;
  const substract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return { add, substract, multiply, divide };
};

const { divide: division } = calculate2(8, 2);
console.log(division());