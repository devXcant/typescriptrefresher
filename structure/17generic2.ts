function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}

const reversedPair = reversePair ("hello", 20)
console.log(reversedPair)


class Box<T>{
    private content: T;

    constructor(initialContent:T) {
        this.content = initialContent
    }

    getContent(): T {
        return this.content
    }

    setContent(newContent: T): void{
        this.content = newContent
    }
}


const strig= new Box<string>("Hello ajcdjc")
console.log(strig.getContent())
 