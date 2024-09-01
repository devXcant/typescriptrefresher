"use strict";
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversedPair = reversePair("hello", 20);
console.log(reversedPair);
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const strig = new Box("Hello ajcdjc");
console.log(strig.getContent());
