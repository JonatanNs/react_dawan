let myArray = [];
let myNames = ["Riri", "Fifi", "Loulou"];
let myNames2 = new Array(5);

console.log(myArray, myNames, myNames2);

// Ajout d'un élément 
myArray.push("Toto");
myNames.push("Toto");
myNames2.push("Toto");

console.log(myArray, myNames, myNames2);
console.log("________________");
// Suppression d'un element
console.log(myNames);
myNames.splice(1,2);
console.log(myNames); 

console.log("________________");
// Remplacement d'un element
console.log(myNames);
myNames.splice(2, 1, "Messi");
console.log(myNames);

// Boucle for of 
console.log("Boucle for of ");
for(item of myNames){
    console.log(item);
}

console.log("__Boucle forEach __");
myNames.forEach((item) => console.log(item));

myNames.forEach((item, indx, arr) => console.log("Index : " + indx, "; Item : " + item, "; Tableau : " + arr));