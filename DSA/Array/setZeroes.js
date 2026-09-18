var setZeroes = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    const row = new Array(n).fill(false);
    const col = new Array(m).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};

const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]

console.log(setZeroes(matrix));