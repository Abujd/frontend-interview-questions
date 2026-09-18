var rotate = function (matrix) {

    //tranpose ele diagonally (i, j) becomes (j, i)

    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            //Swap ele at (i, j) with (j, i)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]

        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);


console.log(rotate(matrix));