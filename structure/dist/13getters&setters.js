"use strict";
class MyClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new MyClass();
console.log(`current value: ${myInstance.myProperty}`);
myInstance.myProperty = 10;
console.log(`current value: ${myInstance.myProperty}`);
