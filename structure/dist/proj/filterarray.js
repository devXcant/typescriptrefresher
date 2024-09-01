"use strict";
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);
const stringArr = ["apple", "banana", "cherry", "pear"];
const shortwords = filterArray(stringArr, (word) => word.length < 6);
console.log(shortwords);
const fruitArray = [
    { name: "apple", color: "red" },
    { name: "pear", color: "green" },
    { name: "bum", color: "blue" },
];
const redFruit = filterArray(fruitArray, (fruit) => fruit.color === "red");
console.log(redFruit);
