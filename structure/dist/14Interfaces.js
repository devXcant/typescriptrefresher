"use strict";
const computerExample = {
    name: "i7",
    ram: 8,
    hdd: 128,
};
console.log(computerExample.name);
const movie1 = {
    name: "Star wars",
    ratings: 8.9,
    // genre: "action"
};
console.log(movie1);
const add = (a, b) => a + b;
console.log(add(2, 2));
const sub = (a, b) => a - b;
console.log(sub(8, 2));
function greet(person) {
    console.log(`hello ${person.firstName} ${person.lastName}`);
    person.sayHello();
}
const john = {
    firstName: "John",
    lastName: "Doe",
    age: 10,
    sayHello() {
        console.log("hi there");
    },
};
const mary = {
    firstName: "mary",
    lastName: "jane",
    age: 12,
    sayHello() {
        console.log("bixxcth");
    },
};
greet(john);
greet(mary);
const song1 = {
    songName: "Damola",
    singerName: "Fireboy",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, singer: ${singerName}`;
    },
};
console.log(song1.printSongInfo("x", "x info"));
const movie2 = {
    name: "Star wars",
    ratings: 8.9,
    genre: "action",
    printMovieInfo(name, price, ratings) {
        return `Movie name:${name} price:${price} ratings:${ratings}`;
    },
};
const res = movie2.printMovieInfo("john wick", 12.99, 8.7);
console.log(res);
class Car {
    start() {
        console.log("car is starting");
    }
    stop() {
        console.log("car is stopped");
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
