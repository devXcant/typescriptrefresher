function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

const num = printNumber(12, 20);

// generic
function Generic<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue]
}

const ress = Generic<number>(10,20)

console.log(ress)


function getKey<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  
}
