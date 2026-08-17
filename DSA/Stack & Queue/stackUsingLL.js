class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class StackUsingList {
    constructor() {
        this.head = null;
        this.size = 0; //
    }

    push(x) {
        const newNode = new Node(x);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        if (this.head === null) {
            console.log("stack is empty");
            return -1;
        }
        let popped = this.head.data;
        const temp = this.head;
        this.head = this.head.next;
        this.size--;
        return popped;
    }
    top() {
        if (this.head === null) {
            console.log("stack is empty");
            return -1;
        }
        return this.head.data;
    }
    isEmpty() {
        return (this.size === 0);
    }


}

const st = new StackUsingList();
const commands = ["LinkedListStack", "push", "push",
    "pop", "top", "isEmpty"];
const inputs = [[], [3], [7], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === "push") {
        st.push(inputs[i][0]);
        console.log("null");
    } else if (commands[i] === "pop") {
        console.log(st.pop());
    } else if (commands[i] === "top") {
        console.log(st.top());
    } else if (commands[i] === "isEmpty") {
        console.log(st.isEmpty() ? "true" : "false");
    } else if (commands[i] === "LinkedListStack") {
        console.log("null");
    }
}