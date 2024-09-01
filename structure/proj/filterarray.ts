function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

const stringArr = ["apple", "banana", "cherry", "pear"];
const shortwords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortwords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "apple", color: "red" },
  { name: "pear", color: "green" },
  { name: "bum", color: "blue" },
];

const redFruit = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "red"
);
console.log(redFruit);
