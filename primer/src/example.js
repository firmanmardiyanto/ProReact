import oddOnly, { sumValues } from "./sum";

import { asyncAdd } from "./async";

console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

const myFunc = (name, weather = "raining", ...extraArgs) => {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for (let i = 0; i < extraArgs.length; i++)
    console.log("Extra Arg: " + extraArgs[i]);
};

console.log("This statement is outside the function");

myFunc("Firman", "sunny", "one", "two", "three");

function myFuncReturn(name) {
  return "Hello " + name + ".";
}

console.log(myFuncReturn("Firman"));

function myFuncs(nameFunction) {
  return "Hello " + nameFunction() + ".";
}
console.log(
  myFuncs(function () {
    return "Firman";
  })
);

function printName(nameFunction, printFunction) {
  printFunction(myFuncs(nameFunction));
}

printName(function () {
  return "Firman";
}, console.log);

const printNames = (nameFunction, printFunction) =>
  printFunction(myFuncs(nameFunction));
printNames(function () {
  return "Adam";
}, console.log);

function messageFunction(name, weather) {
  let message = `Hello, ${name}`;
  if (weather === "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("Firman", "raining");

function messageFunctions(name, weather) {
  var message = `Hello, ${name}`;
  if (weather === "sunny") {
    message = "It is a nice day";
    console.log(message);
  } else {
    message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunctions("Firman", "raining");

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.5, stock: 20 },
];
let totalValue = products
  .filter((item) => item.stock > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0);
console.log(`Total value: $${totalValue.toFixed(2)}`);
let myData = {
  name: "Firman",
  weather: "sunny",
  printMessages: () => {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
};
myData.printMessages();

class MyDataClass {
  constructor() {
    this.name = "Firman";
    this.weather = "sunny";
  }
  printMessages = () => {
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  };
}
let myDataClass = new MyDataClass();
myDataClass.printMessages();

let secondObject = {};
Object.assign(secondObject, myDataClass);
secondObject.printMessages();

let secondObjects = { ...myDataClass, weather: "cloudy" };
console.log(
  `myData: ${myDataClass.weather}, secondObjects: ${secondObjects.weather}`
);

const myDatas = {
  name: "Bob",
  location: {
    city: "Paris",
    country: "France",
  },
  employment: {
    title: "Manager",
    dept: "Sales",
  },
};
function printDetails({ name, location: { city }, employment: { title } }) {
  console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}
printDetails(myDatas);

//import odd &sum
let values = [10, 20, 30, 40, 50];
let total = sumValues(values);
let odds = oddOnly(values);
console.log(`Total: ${total}, Odd Total: ${odds}`);
let valuess = [10, 20, 30, 40, 50];
asyncAdd(valuess).then((total) => console.log(`Main Total: ${total}`));

async function doTask() {
  let total = await asyncAdd(values);
  console.log(`Main Total: ${total}`);
}
doTask();
