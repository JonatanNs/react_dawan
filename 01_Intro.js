var myVar = "hello world";
var myLet = "hello world";
var myConst = "hello world";

//console.log("hello world");

var x = 10;
 
console.log("1", x); // -> (1, 10)
{
  let x = 2;
  console.log("2", x); // -> (2, 2)
 
  var y = 5;
  const Z = 6;
}
 
console.log("3", x); // -> (3, 10)
console.log("4", y); // -> (4, 5)
console.log("5", Z); // -> Erreur, pas accessible