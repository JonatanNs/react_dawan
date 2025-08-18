function helloName(name) {
  console.log("Hello " + name);
}

function helloName2(name) {
  return "Hello " + name;
}

helloName("John");
const result = helloName2("John");
console.log(result);

// ___________________________________________________________________
console.log(
  "_________________________ fonctions fléchées _________________________"
);

const helloNameFleche = (name) => {
  console.log("Hello " + name);
};
helloNameFleche("John");

const helloNameFleche2 = (name) => {
  return "Hello " + name;
};
const resultFleche = helloNameFleche2("John");
console.log(resultFleche);

// Mot clé return implicite quand on ne met pas d'accolade ( '{' '}' ) après la flèche
const helloNameFleche3 = (name) => "Hello " + name;

const result3 = helloNameFleche3("John");
console.log(result3);