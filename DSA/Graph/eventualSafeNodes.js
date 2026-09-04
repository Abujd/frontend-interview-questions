var eventualSafeNodes = function (graph) {

    const adjRev = Array.from({
        length: graph.length
    }, () => []);
    const InDegree = new Array(graph.length).fill(0);

    // Build the reverse graph and calculate indegrees
    for (let i = 0; i < graph.length; i++) {
        for (let neighbor of graph[i]) {
            adjRev[neighbor].push(i);  // Reverse the direction of edges
            InDegree[i]++;  // Increment indegree for the current node
        }
    }


    let q = [];  // Queue to store nodes with no outgoing edges
    let safeNodes = [];

    for (let i = 0; i < graph.length; i++) {
        if (InDegree[i] === 0) q.push(i);
    }
    let res = [];
    while (q.length > 0) {
        let node = q.shift();
        res.push(node);
        for (const n of adjRev[node]) {
            InDegree[n]--;
            if (InDegree[n] === 0) {
                q.push(n);
            }

        }
    }
    res.sort((a, b) => a - b);
    return res;

};


let graph = [
    [1, 2],
    [2, 3],
    [5],
    [0],
    [5],
    [],
    []
];

console.log(eventualSafeNodes(graph));