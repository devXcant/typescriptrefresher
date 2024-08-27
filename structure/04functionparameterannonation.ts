// regular function
function addOne(num: number) {
    return num + 1;
}
const res = addOne(3)
console.log(res)


// arrow functions
const double = (x:number, y:number) => x * y
const res2 = double(2, 10)
console.log(res2)



// default params value
function greet(person: string = 'Anonymous') {
    return `Hello ${person}`
}

const res3 = greet()
console.log(res3)


// return annonatations
// regular function
function double1(x: number): number {
        return x * x
}

const res4 = double1(2)
console.log(res4)


// arrow functions
const double2 = (x: number): number => x * x;
console.log(double2)
