class ArrayStack {
    constructor(size = 1000) {
        this.stackArray = new Array(size);
        this.capacity = size;
        this.topIndex = -1; //

    }
    push(x) {
        if (this.topIndex >= this.capacity - 1) {
            console.log("Stack Overflow");
            return;


        }
        this.stackArray[++this.topIndex] = x;
    }
    isEmpty() {
        return this.topIndex === -1;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return -1;
        }
        return this.stackArray[this.topIndex--];
    }
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return -1;
        }
        return this.stackArray[this.topIndex];
    }
}
const stack = new ArrayStack();
const commands = [
    "ArrayStack",
    "push",
    "push",
    "push",
    "top",
    "pop",
    "top",
    "isEmpty"
];

const inputs = [
    [],
    [10],
    [20],
    [30],
    [],
    [],
    [],
    []
];
for (let i = 0; i < commands.length; ++i) {
    switch (commands[i]) {
        case "push":
            stack.push(inputs[i][0]);
            break;

        case "pop":
            console.log(stack.pop());
            break;

        case "top":
            console.log(stack.top());
            break;

        case "isEmpty":
            console.log(stack.isEmpty() ? "true" : "false");
            break;

        case "ArrayStack":
            console.log("null");
            break;
    }
}