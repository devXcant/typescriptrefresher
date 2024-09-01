class Persons {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Persons("John", 20);
console.log(person);

class Country {
  public capital: string;
  private city: string;
  protected address: string;

  constructor(city: string, capital: string, address: string) {
    this.city = city;
    this.capital = capital;
    this.address = address;
  }
}

let count = new Country("Abuja", "Wuse", "Ahamadu bello");
console.log(count);
// console.log(count.address)

class State extends Country {
  public state: string;
  public stateLoc: string;

  constructor(
    state: string,
    stateLoc: string,
    address: string,
    capital: string,
    city: string
  ) {
    super(address, capital, city);
    this.state = state;
    this.stateLoc = stateLoc;
  }
}

const statelog = new State("Ekiti", "SW", "df", "ad", "asd");
console.log(statelog);
