"use strict";
function printNumber(item, defaultValue) {
    return [item, defaultValue];
}
const num = printNumber(12, 20);
// generic
function Generic(item, defaultValue) {
    return [item, defaultValue];
}
const ress = Generic(10, 20);
console.log(ress);
function getKey(obj) {
}
