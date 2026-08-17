/**
 * push s1 to s2
 * x to s1
 * s2 to s1
 */
// O(n)
// push is more expensive
class StackQueue {
    constructor() {
        this.st1 = [];
        this.st2 = [];
    }
    push(x) {
        while (this.st1.length) {
            this.st2.push(this.st1.pop());
        }
        this.st1.push(x);
        while (this.st2.length) {
            this.st1.push(this.st2.pop());
        }
    }

    pop() {
        return this.st1.pop();
    }
    top() {
        return this.st1[this.st1.length - 1];
    }
    isEmpty() {
        return this.st1.length === 0
    }
}
