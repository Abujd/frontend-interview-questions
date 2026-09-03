var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    const visited = Array.from({
        length: m
    }, () => new Array(n).fill(0));

    const dist = Array.from({
        length: m
    }, () => new Array(n).fill(0))


    let bfsQueue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (mat[i][j] === 0) {
                visited[i][j] = 1;
                bfsQueue.push([i, j, 0]);
            }
        }
    }

    // Directions: Up, Right, Down, Left
    const delRow = [-1, 0, 1, 0];
    const delCol = [0, 1, 0, -1];

    while (bfsQueue.length > 0) {
        //Dequeuue first ele
        const [row, col, steps] = bfsQueue.shift();
        dist[row][col] = steps;

        //Explore all 4 directions

        for (let i = 0; i < 4; i++) {
            const nrow = row + delRow[i];
            const ncols = col + delCol[i];

            if (nrow >= 0 && ncols >= 0 && nrow < m && ncols < n && visited[nrow][ncols] === 0) {
                visited[nrow][ncols] = 1;
                bfsQueue.push([nrow, ncols, steps + 1])
            }
        }


    }
    return dist;
};


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]

let mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
];

console.log(updateMatrix(mat));