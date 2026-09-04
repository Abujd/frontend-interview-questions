function cycleInDG(v, adj) {
    const indegree = new Array(v).fill(0);

    for (let i = 0; i < v; i++) {
        for (const v of adj[i]) {
            indegree[v]++;
        }
    }
    //insert 0 indegree node in Queue

    const queue = [];

    for (let i = 0; i < v; i++) {
        if (indegree[i] === 0) queue.push(i);
    }
    let c = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        c++;

        for (const n of adj[node]) {
            indegree[n]--;
            if (indegree[n] === 0)
                queue.push(n);
        }
    }
    return c !== v;
}

let V = 2;
const adj = [[1, 0]];
console.log(cycleInDG(V, adj));
