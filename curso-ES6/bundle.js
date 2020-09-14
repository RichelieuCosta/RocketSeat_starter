"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var ToDoList = /*#__PURE__*/function (_List) {
  _inherits(ToDoList, _List);

  var _super = _createSuper(ToDoList);

  /* constructor(){
       this.todos = [];
   }
    addTodos(){
       this.todos.push('Novo ToDo');
       console.log(this.todos);
    }
   //*/
  function ToDoList() {
    var _this;

    _classCallCheck(this, ToDoList);

    _this = _super.call(this);
    _this.usuario = 'Richelieu';
    return _this;
  }

  _createClass(ToDoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return ToDoList;
}(List);

var MinhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function () {
  MinhaLista.add('nova adição');
};

MinhaLista.mostraUsuario();

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var resultado = Matematica.soma(3, 7);
console.log(resultado);
"use strict";

// ES5 ***********************************************
// para esses e outros exemplos: https://www.w3schools.com/js/js_es5.asp
function testeArray() {
  var arr = [1, 2, 3, 4, 5, 8, 9];
  var newArr = arr.map(function (item) {
    return item * 2;
  });
  var newArr2 = arr.map(multiplica2);
  console.log(newArr);
  console.log(newArr2);
}

function multiplica2(value) {
  return value * 2;
}

testeArray();

function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}

var numbers = [45, 4, 9, 16, 25];
var numbersOver18 = numbers.filter(myFunction2);
console.log(numbersOver18);

function myFunction2(value) {
  return value > 18;
}

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(isOverEighteen);
console.log(allOver18);

function isOverEighteen(value) {
  return value > 18;
}

var someOver18 = numbers.some(isOverEighteen);
console.log(someOver18);
var timInMSs = Date.now();
console.log(timInMSs); // ES5

var functionM = function functionM(x, y) {
  return x * y;
};

console.log(functionM(3, 3)); // ES6 *****************************************************
// para mais exemplos: https://www.w3schools.com/js/js_es6.asp

var functionM6 = function functionM6(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return x * y;
};

console.log(functionM6(3));
console.log(functionM6(3, 3));

function ES6_exemple_escope() {
  var x = 10; // Here x is 10

  {
    var _x = 2;
    var w = 3;
    var y = 8; // Here x is 2

    console.log(w);
    console.log("x vale ".concat(_x, ", w vale ").concat(w, ", y vale ").concat(y));
  } // Here x is 10
  // Here w doesn't exist. 

  console.log(y);
}

ES6_exemple_escope();
"use strict";

function testeDesestruturacao() {
  var usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  };
  var nome = usuario.nome,
      idade = usuario.idade,
      cidade = usuario.endereco.cidade;
  console.log(nome);
  console.log(idade, cidade);
  mostraCaracteristicas(usuario);
}

testeDesestruturacao();

function mostraCaracteristicas(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}
"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST
function testeRest() {
  var usuario2 = {
    nome: 'Richelieu',
    idade: 26,
    empresa: 'UFPB'
  };

  var idade = usuario2.idade,
      resto = _objectWithoutProperties(usuario2, ["idade"]);

  console.log(idade);
  console.log(resto);
  var array_for_rest = [1, 2, 3, 4, 5, 6];
  var a = array_for_rest[0],
      b = array_for_rest[1],
      c = array_for_rest.slice(2);
  console.log(a);
  console.log(b);
  console.log(c);
}

testeRest();

function teste_soma_rest(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return a + b + params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(teste_soma_rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// SPREAD
function testeSPREAD() {
  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var arr3 = [].concat(arr1, arr2);
  console.log(arr3);
  var usuario1 = {
    nome: 'Richelieu',
    idade: 26,
    endereco: {
      cidade: 'João Pessoa',
      estado: 'PB'
    }
  };
  var usuario2 = {
    nome: 'Lucas',
    idade: 22,
    endereco: {
      cidade: 'Montreal',
      estado: 'Quebec'
    }
  };

  var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
    nome: 'Marilia',
    idade: 23
  });

  console.log(usuario1);
  console.log(usuario3);
  console.log("A cidad\xE3 ".concat(usuario3.nome, " tem ").concat(usuario3.idade, " e mora em ").concat(usuario3.endereco.cidade));
}

testeSPREAD();
