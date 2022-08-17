/* Parametro padrão */

const sayHello = (name = "Fulono") => console.log("Olá " + name);

sayHello();

/* Template string - concatenação */

const showProduct = (product, price) => {
  console.log(`O valor do produto ${product} custa: ${Math.round(price)}`);
};

showProduct("iPhone", 1000.6);

/* Object Short Syntax */

const name = "Camisa";
const price = 20;

const product = {
  name,
  price,
  inStock: true,
};

console.log(product);

/* Desestruturação */

const person = {
  firstName: "Klysman",
  secondName: "Hataru",
  age: 28,
  address: {
    city: "BH",
    region: "MG",
  },
};

const {
  firstName,
  secondName,
  age,
  address: { city, region },
} = person;
console.log(firstName, secondName, age, city, region);

const showFullName = (person) => {
  console.log(`${person.firstName} ${person.secondName}`);
};

showFullName(person);

/* Operadores rest e spread */

const sum = (...params) => {
  return params.reduce((total, next) => total + next);
};
console.log(sum(1, 2, 3, 4, 5));

const personSpread = {
    firstName: "Klysman",
    secondName: "Hataru",
    age: 28,
    company: "Kunumi",
}

const person1Spread = {
    ...personSpread,
    firstName: "Fulano",
}

console.log(person1Spread);