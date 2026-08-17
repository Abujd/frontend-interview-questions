class QueStack {
    constructor() {
        this.q = [];
    }

    push(x) {
        let s = this.q.length;
        this.q.push(x);

        for (let i = 0; i < s; i++) {
            this.q.push(this.q.shift());
        }
    }
    pop() {
        let n = this.q[0];
        this.q.shift();
        return n;
    }
    top() {
        return this.q[0];
    }
    isEmpty() {
        return this.q.length === 0;
    }
}