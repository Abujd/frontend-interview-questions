
var searchMatrix = function (matrix, target) {
    let n = matrix.length, m = matrix[0].length;
    let row = 0;
    let col = m - 1;


    while (row < n && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        }

        if (target > matrix[row][col]) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};
