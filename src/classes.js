/* Função construtora */

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

const unu = new Car("Unu", "R$ 10.000,00");
const fiat = new Car("Fiat", "R$ 13.000,00");

console.log(unu);
console.log(fiat);

/* Classes */

class Car2 {
  constructor(brand, price = 100) {
    this.brand = brand;
    this.price = price;
  }

  run() {
    console.log("Vrummmm");
  }
  stop() {
    console.log("Stop");
  }
}

const civic = new Car2("Unu", "R$ 20.000,00");
civic.run();

/* Get and Sete */

class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}

const person2 = new Person("Klysman", 20);

console.log(person2);

/* Static */

class Calculator {
  static sum(a, b) {
    return a + b;
  }
}

console.log(Calculator.sum(21, 2));

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return Person2.joinNames(this.firstName, this.lastName);
  }

  static joinNames(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

const person3 = new Person2("Klysman", "Hataru");

console.log(person3.fullName);

/* Herança */

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerando...");
  }
  frear() {
    console.log("Freando...");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }

  empinar() {
    console.log(`Empinou com ${this.rodas} rodas`);
  }
  acelerar() {
    super.acelerar();
    console.log("Acelerando muito...");
  }
}

const bross = new Moto(1, true);

bross.empinar();
bross.acelerar();
console.log(bross);
