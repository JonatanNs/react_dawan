class Car {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    display(){
        console.log("Marque de la voiture " + this.name, "Annee " + this.year);
    }
}

const myCar = new Car("BMW", 2022);
console.log(myCar);

myCar.display();
console.log(myCar.name);
console.log(myCar.year);

const names = myCar["name"];
const year = myCar["year"];
console.log(names, year);