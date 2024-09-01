"use strict";
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Persons("John", 20);
console.log(person);
class Country {
    constructor(city, capital, address) {
        this.city = city;
        this.capital = capital;
        this.address = address;
    }
}
let count = new Country("Abuja", "Wuse", "Ahamadu bello");
console.log(count);
// console.log(count.address)
class State extends Country {
    constructor(state, stateLoc, address, capital, city) {
        super(address, capital, city);
        this.state = state;
        this.stateLoc = stateLoc;
    }
}
const statelog = new State("Ekiti", "SW", "df", "ad", "asd");
console.log(statelog);
