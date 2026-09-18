
var searchMatrix = function (matrix, target) {

    let n = matrix.length, m = matrix[0].length;
    let start = 0, end = n * m - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;
        if (matrix[row][col] === target) {
            return true
        }
        if (matrix[row][col] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
};