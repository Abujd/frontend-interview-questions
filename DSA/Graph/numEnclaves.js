var numEnclaves = function (grid) {

    let m = grid.length;
    let n = grid[0].length;
    if (m === 0 || n === 0) return board;

    const dRow = [-1, 0, 1, 0];
    const dCol = [0, -1, 0, 1];


    let visited = Array.from({ length: m }, () => Array(n).fill(0));
    let c = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                c++;
            }
        }
    }

    function dfs(row, col) {
        visited[row][col] = 1;
        c--;
        for (let i = 0; i < 4; i++) {
            let nr = row + dRow[i];
            let nc = col + dCol[i];

            if (nr >= 0 && nc >= 0 && nr < m && nc < n && grid[nr][nc] === 1 && visited[nr][nc] === 0) {

                dfs(nr, nc)
            }
        }
    }


    // First and last ROW
    for (let i = 0; i < n; i++) {
        if (visited[0][i] === 0 && grid[0][i] === 1) {
            dfs(0, i);
        }

        if (visited[m - 1][i] === 0 && grid[m - 1][i] === 1) {
            dfs(m - 1, i);
        }
    }

    //first and last col
    for (let i = 0; i < m; i++) {
        if (visited[i][0] === 0 && grid[i][0] === 1) {
            dfs(i, 0);
        }

        if (visited[i][n - 1] === 0 && grid[i][n - 1] === 1) {
            dfs(i, n - 1);
        }
    }
    console.log(visited);

    return c;
};


let grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]

console.log(numEnclaves(grid));