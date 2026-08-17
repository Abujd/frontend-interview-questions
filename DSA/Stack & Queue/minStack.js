class MinStack {
    // Initialize a stack
    constructor() {
        this.st = [];
    }
    push(x) {
        if (this.st.length === 0) {
            this.st.push([x, x]);
        }

        const min = Math.min(this.getMin(), x);
        this.st.push([x, min]);

    }
    pop() {
        this.st.pop();
    }
    top() {
        return this.st[this.st.length - 1][0]
    }
    getMin() {
        return this.st[this.st.length - 1][1];
    }
}

