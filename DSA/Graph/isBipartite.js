var isBipartite = function (graph) {

    const m = graph.length;

    const visitedColor = new Array(m).fill(-1);

    function dfs(node, color) {
        visitedColor[node] = color;

        for (const i of graph[node]) {
            if (visitedColor[i] === -1) {
                if (dfs(i, 1 - color) === false) return false;
            } else if (visitedColor[i] === color) return false;
        }

        return true;

    }

    for (let i = 0; i < m; i++) {
        if (visitedColor[i] === -1) {
            if (dfs(i, 0) === false) return false;
        }
    }
    return true;
};



let graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2]
];

console.log(isBipartite(graph));