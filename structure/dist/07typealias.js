"use strict";
const printusers = (user) => {
    return `NAme: (${user.name}) Age:(${user.age}) location:(${user.location})`;
};
const res8 = printusers({ name: "ay", age: 20, location: "abj" });
console.log(res8);
