// original interface
interface Car {
  brand: string;
  start(): void;
}

// declaration margin or interface extension
interface Car {
  model: string;
  stop(): void;
}

const myCars: Car = {
  brand: "bmw",
  model: "m3",
  start() {
    console.log("car started");
  },
  stop() {
    console.log("car stopped");
  },
};

myCars.start();
