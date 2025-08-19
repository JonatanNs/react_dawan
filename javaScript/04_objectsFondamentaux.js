class Car {
  #name; // attribut privé
  model;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.model = name;
  }

  display() {
    console.log("Marque de la voiture " + this.name, "| Annee " + this.year);
  }

  get name() {
    console.log("name en passant par le getter");
    return this.#name;
  }

  set name(value) {
    this.#name = value;
    console.log("valeur MàJ avec le setter");
  }
}

const myCar = new Car("BMW", 2022);
console.log(myCar);

// Accès aux attributs et méthodes de class
myCar.display();
console.log("name avec attibut privé: ", myCar.name);
console.log(myCar.year);

// Accès aux attributs et méthodes de class avec les accesseurs
const name = myCar["name"];
const year = myCar["year"];
console.log(name, year);

// Pour modifier un attribut :
myCar.name = "Audi";
myCar.year = 2023;
console.log(myCar);

// Copie d'objet
const myCar2 = myCar; // A éviter ! ici on copie uniquement l'adresse mémoire de 'MyCar'
console.log("myCar", myCar);
console.log("myCar2", myCar2);

myCar2.model = "Mercedes";

console.log(myCar2.model);
console.log(myCar.model);

// Pour une copie 'propre'
const myCar3 = Object.assign({}, myCar); // copie 'superficielle' de l'objet , on ne va copier que les attributs et leur valeur
console.log(myCar3);
myCar3.model = "Renault";
console.log(myCar3);
console.log(myCar);
// console.log(myCar3.display());  // --> Avec une copie 'superficielle' on ne copie pas les méthodes de class

console.log("____________copie 'profonde'____________");

let myCar4 = new Car();
myCar4 = Object.assign(myCar4, myCar);
console.log(myCar4);
console.log(myCar);

// Ajout d'une propriété (attention aux fautes de frappe !)
myCar4.newsProps = "Nouvelle propriété";
console.log(myCar4);

myCar4.modele = "nouveau modèle";
console.log(myCar4);