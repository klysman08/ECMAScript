"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* Função construtora */
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

var unu = new Car("Unu", "R$ 10.000,00");
var fiat = new Car("Fiat", "R$ 13.000,00");
console.log(unu);
console.log(fiat);
/* Classes */

var Car2 = /*#__PURE__*/function () {
  function Car2(brand) {
    var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    _classCallCheck(this, Car2);

    this.brand = brand;
    this.price = price;
  }

  _createClass(Car2, [{
    key: "run",
    value: function run() {
      console.log("Vrummmm");
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log("Stop");
    }
  }]);

  return Car2;
}();

var civic = new Car2("Unu", "R$ 20.000,00");
civic.run();
/* Get and Sete */

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this._name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }]);

  return Person;
}();

var person2 = new Person("Klysman", 20);
console.log(person2);
/* Static */

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Calculator;
}();

console.log(Calculator.sum(21, 2));

var Person2 = /*#__PURE__*/function () {
  function Person2(firstName, lastName) {
    _classCallCheck(this, Person2);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Person2, [{
    key: "fullName",
    get: function get() {
      return Person2.joinNames(this.firstName, this.lastName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(firstName, lastName) {
      return "".concat(firstName, " ").concat(lastName);
    }
  }]);

  return Person2;
}();

var person3 = new Person2("Klysman", "Hataru");
console.log(person3.fullName);
/* Herança */

var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);

    this.rodas = rodas;
  }

  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log("Acelerando...");
    }
  }, {
    key: "frear",
    value: function frear() {
      console.log("Freando...");
    }
  }]);

  return Veiculo;
}();

var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);

  var _super = _createSuper(Moto);

  function Moto(rodas, capacete) {
    var _this;

    _classCallCheck(this, Moto);

    _this = _super.call(this, rodas);
    _this.capacete = capacete;
    return _this;
  }

  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("Empinou com ".concat(this.rodas, " rodas"));
    }
  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);

      console.log("Acelerando muito...");
    }
  }]);

  return Moto;
}(Veiculo);

var bross = new Moto(2, true);
bross.empinar();
bross.acelerar();
console.log(bross);
