// La function map crée une copie du tableau existant, et applique la même opération sur chacun des éléments du tableau
// La function map ne modifie pas le tableau sur lequel elle est appelée

const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const firstNames = persons.map((item) => item.firstName); 
console.log(firstNames);

const newPersons = persons.map((person) => [person.firstName, person.lastName]); 
console.log(newPersons);

// Exercice :
// Faire une function qui 
// - prend un paramètre un tableau 
// - retourne un tableau avec tous les éléments au carré
// Retour attendu avec [1, 2, 3, 4] -> [ 1, 4, 9, 16 ]

const chiffre = [1, 2, 3, 4];
 
function myfunction(tableau){
    return tableau.map((num) => num*num);
}

console.log(myfunction(chiffre));

// La function flatMap()

const mapResult = chiffres.map((chiffre) => [chiffre * chiffre]);
const flatMapResult = chiffres.map((chiffre) => [chiffre * chiffre]);

console.log(mapResult);
console.log(flatMapResult);