
// ES5 ***********************************************
// para esses e outros exemplos: https://www.w3schools.com/js/js_es5.asp

const arr = [1, 2, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item){
    return item*2;
})

const newArr2 = arr.map(multiplica2);

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
console.log(timInMSs);


// ES5
var m = function(x, y) {
    return x * y;
 }

console.log(m(3,3));
 
// ES6 *****************************************************
// para mais exemplos: https://www.w3schools.com/js/js_es6.asp

const m6 = (x, y=2) => x * y;


console.log(m6(3));
console.log(m6(3,3));


function ES6_exemple_escope(){

    var x = 10;
    // Here x is 10
    {
        let x = 2;
        
        let w = 3;
        var y = 8;

        // Here x is 2

        console.log(w);
    }
    // Here x is 10
    // Here w doesn't exist. 

    console.log(y);

}

ES6_exemple_escope();

