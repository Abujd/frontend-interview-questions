var isCycle = function (v, adj) {

    const visited = new Array(v).fill(false);
    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            let queue = [];
            queue.push([i, -1]);
            visited[i] = 1;
            while (queue.length > 0) {
                let [node, cameFrom] = queue.shift();

                for (const n of adj[node]) {
                    if (!visited[n]) {
                        visited[n] = 1;
                        queue.push([n, node]);
                    }
                    // Already visited and not parent => cycle
                    else if (cameFrom !== node) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};


// Input:
// V = 5
// adj = [[1,2], [0,2], [0,1,3], [2,4], [3]]

let v = 5;

let adj = [
    [1, 2],
    [0, 2],
    [0, 1, 3],
    [2, 4],
    [3]
];

console.log(isCycle(v, adj));