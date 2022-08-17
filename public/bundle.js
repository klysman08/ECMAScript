"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Parametro padrão */
var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Fulono";
  return console.log("Olá " + name);
};

sayHello();
/* Template string - concatenação */

var showProduct = function showProduct(product, price) {
  console.log("O valor do produto ".concat(product, " custa: ").concat(Math.round(price)));
};

showProduct("iPhone", 1000.6);
/* Object Short Syntax */

var name = "Camisa";
var price = 20;
var product = {
  name: name,
  price: price,
  inStock: true
};
console.log(product);
/* Desestruturação */

var person = {
  firstName: "Klysman",
  secondName: "Hataru",
  age: 28,
  address: {
    city: "BH",
    region: "MG"
  }
};
var firstName = person.firstName,
    secondName = person.secondName,
    age = person.age,
    _person$address = person.address,
    city = _person$address.city,
    region = _person$address.region;
console.log(firstName, secondName, age, city, region);

var showFullName = function showFullName(person) {
  console.log("".concat(person.firstName, " ").concat(person.secondName));
};

showFullName(person);
/* Operadores rest e spread */

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sum(1, 2, 3, 4, 5));
var personSpread = {
  firstName: "Klysman",
  secondName: "Hataru",
  age: 28,
  company: "Kunumi"
};

var person1Spread = _objectSpread(_objectSpread({}, personSpread), {}, {
  firstName: "Fulano"
});

console.log(person1Spread);
