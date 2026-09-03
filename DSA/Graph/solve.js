var solve = function (board) {
    const m = board.length;
    const n = board[0].length;

    if (m === 0 || n === 0) return board;

    const dRow = [-1, 0, 1, 0];
    const dCol = [0, -1, 0, 1];

    const visited = Array.from(
        { length: m },
        () => new Array(n).fill(0)
    );

    function dfs(row, col) {
        visited[row][col] = 1;

        for (let i = 0; i < 4; i++) {
            const newR = row + dRow[i];
            const newC = col + dCol[i];

            if (
                newR >= 0 &&
                newC >= 0 &&
                newR < m &&
                newC < n &&
                visited[newR][newC] === 0 &&
                board[newR][newC] === "O"
            ) {
                dfs(newR, newC);
            }
        }
    }

    // First and last ROW
    for (let i = 0; i < n; i++) {

        // First row
        if (board[0][i] === "O" && visited[0][i] === 0) {
            dfs(0, i);
        }

        // Last row
        if (board[m - 1][i] === "O" && visited[m - 1][i] === 0) {
            dfs(m - 1, i);
        }
    }

    // First and last COLUMN
    for (let i = 0; i < m; i++) {

        // First column
        if (board[i][0] === "O" && visited[i][0] === 0) {
            dfs(i, 0);
        }

        // Last column
        if (
            board[i][n - 1] === "O" &&
            visited[i][n - 1] === 0
        ) {
            dfs(i, n - 1);
        }
    }

    // Convert surrounded O -> X
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (visited[i][j] === 0 && board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }

    return board;
};


let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]];





console.log(solve(board));