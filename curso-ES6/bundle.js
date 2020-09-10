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
var arr = [1, 2, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
var newArr2 = arr.map(multiplica2);

function multiplica2(value) {
  return value * 2;
}

console.log(newArr);
console.log(newArr2);

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

var m = function m(x, y) {
  return x * y;
};

console.log(m(3, 3)); // ES6 *****************************************************
// para mais exemplos: https://www.w3schools.com/js/js_es6.asp

var m6 = function m6(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return x * y;
};

console.log(m6(3));
console.log(m6(3, 3));

function ES6_exemple_escope() {
  var x = 10; // Here x is 10

  {
    var _x = 2;
    var w = 3;
    var y = 8; // Here x is 2

    console.log(w);
  } // Here x is 10
  // Here w doesn't exist. 

  console.log(y);
}

ES6_exemple_escope();
