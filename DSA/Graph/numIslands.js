var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let visited = Array.from({ length: m }, () => Array(n).fill(0));

    let islands = 0;
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, -1, 0, 1];

    function dfs(row, col) {
        visited[row][col] = 1;
        for (let i = 0; i < 4; i++) {
            let nr = row + dRow[i];
            let nc = col + dCol[i];

            if (nr >= 0 && nc >= 0 && nr < m && nc < n && grid[nr][nc] === "1" && visited[nr][nc] === 0) {

                dfs(nr, nc)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && visited[i][j] === 0) {
                islands++;
                dfs(i, j);
            }
        }
    }
    return islands;
};

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

console.log(numIslands(grid));