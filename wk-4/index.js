"use strict";
console.group("using VAR a");      
var a = 0;
if (true) {
      var a = "inside IF";
      console.log("The value of VAR \"a\" is: " + a);
    }
console.log("The value of VAR \"a\" is: " + a);
var a = "outside IF";
// var a = 2;
// var a = 3;
console.log("The value of VAR \"a\" is: ", a);
console.groupEnd();


console.group("using LET b")
let b = "outside IF";
// let b = "xxxxxxxxxxxxxxxxxxxxxx";

if (true){
      let b = "inside IF";
      console.log("The value of LET \"b\" is: " + b);
}
console.log("The value of LET \"b\" is: " + b);
console.groupEnd();


console.group("using CONST c");
const c = "one";
// const c = "two";
console.log("The value of CONST \"c\" is: " + c);
console.groupEnd();