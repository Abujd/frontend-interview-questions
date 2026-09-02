var findCircleNum = function (isConnected) {
    const n = isConnected.length;

    const adjList = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1) {
                adjList[i].push(j);
            }
        }
    }
    const visited = new Array(n).fill(0);
    let provinces = 0

    function dfs(city) {

        visited[city] = 1;
        for (let neighbor of adjList[city]) {

            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }

    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i);
        }
    }
    return provinces;
};


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]

let isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];

console.log(findCircleNum(isConnected));