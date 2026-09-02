function dfsTraversal(v, adjacencyList) {
    const visited = new Array(v).fill(0);

    return dfs(0, [], adjacencyList, visited);
}

function dfs(v, res, adjacencyList, visited) {
    visited[v] = 1;
    res.push(v);

    for (let u of adjacencyList[v]) {
        if (!visited[u]) {
            dfs(u, res, adjacencyList, visited);
        }
    }

    return res;
}

let v = 5;

let adj = [
    [1, 2],    // 0
    [0, 3, 4], // 1
    [0],       // 2
    [1, 4],    // 3
    [3, 1]     // 4
];

console.log(dfsTraversal(v, adj));

