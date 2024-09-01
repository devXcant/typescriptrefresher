interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "i7",
  ram: 8,
  hdd: 128,
};

console.log(computerExample.name);

interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movie1: Movie = {
  name: "Star wars",
  ratings: 8.9,
  // genre: "action"
};

console.log(movie1);

// interfaces for numbers

interface MathOperations {
  (x: number, y: number): number;
}

const add: MathOperations = (a, b) => a + b;
console.log(add(2, 2));

const sub: MathOperations = (a, b) => a - b;
console.log(sub(8, 2));

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`hello ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 10,
  sayHello() {
    console.log("hi there");
  },
};

const mary: Person = {
  firstName: "mary",
  lastName: "jane",
  age: 12,
  sayHello() {
    console.log("bixxcth");
  },
};

greet(john);
greet(mary);

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Damola",
  singerName: "Fireboy",
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, singer: ${singerName}`;
  },
};

console.log(song1.printSongInfo("x", "x info"));

// collecting interfaces
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie2: MovieGenre = {
  name: "Star wars",
  ratings: 8.9,
  genre: "action",
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name:${name} price:${price} ratings:${ratings}`;
  },
};

const res = movie2.printMovieInfo("john wick", 12.99, 8.7);
console.log(res);

// interface class

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("car is starting");
  }
  stop(): void {
    console.log("car is stopped");
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();
