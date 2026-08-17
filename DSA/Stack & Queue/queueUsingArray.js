class ArrayQueue {
    constructor() {
        this.arr = new Array(10);
        this.start = -1;
        this.end = -1;
        this.currCapacity = 0;
        this.maxCapacity = 10;
    }

    push(x) {
        //Check if queue is full
        if (this.maxCapacity === this.currCapacity) {
            console.log("Queue is full\nExiting...");
            return;
        }
        //If queue is empty, init start & end
        if (this.end === -1) {
            this.start = 0;
            this.end = 0;
        } else {
            //circular increment of end
            this.end = (this.end + 1) % this.maxCapacity;
        }
        this.arr[this.end] = x;
        this.currCapacity++;
    }

    pop() {
        //if Queue is empty
        if (this.start === -1) {
            console.log("Queue Empty\nExiting...");
            process.exit(1);
        }
        let popped = this.arr[this.start];

        //if queue have only element

        if (this.currCapacity === 1) {
            this.start = -1;
            this.end = -1;
        } else {
            this.start = (this.start + 1) % this.maxCapacity;
        }
        this.currCapacity--;
        return popped;

    }
    // Method to get the front element of the queue
    peek() {
        if (this.start === -1) {
            console.log("Queue Empty\nExiting...");
            process.exit(1);
        }
        return this.arr[this.start];
    }

}

const queue = new ArrayQueue();
const commands = ["ArrayQueue", "push", "push", "peek", "pop",];
const inputs = [[], [5], [10], [], [], []];
for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === "push") {
        queue.push(inputs[i][0]);
        console.log("null ");
    } else if (commands[i] === "pop") {
        console.log(queue.pop() + " ");
    } else if (commands[i] === "peek") {
        console.log(queue.peek() + " ");
    } else if (commands[i] === "ArrayQueue") {
        console.log("null ");
    }
}