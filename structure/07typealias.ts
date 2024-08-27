type User = {
  name: string;
  age: number;
  email?: string;
  location: string;
};

const printusers = (user: User) => {
  return `NAme: (${user.name}) Age:(${user.age}) location:(${user.location})`;
};

const res8 = printusers({ name: "ay", age: 20, location: "abj" });

console.log(res8);
