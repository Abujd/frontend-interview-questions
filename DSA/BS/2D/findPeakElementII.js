
var findPeakGrid = function (mat) {
    let n = mat.length;
    let m = mat[0].length;

    let start = 0;
    let end = mat[0].length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let getMaxRowInd = getMaxRowEle(mat, n, mid);

        let left = mid - 1 >= 0 ? mat[getMaxRowInd][mid - 1] : -1;
        let right = mid + 1 < m ? mat[getMaxRowInd][mid + 1] : -1;

        if (mat[getMaxRowInd][mid] > left && mat[getMaxRowInd][mid] > right) {
            return [getMaxRowInd, mid];
        }

        if (mat[getMaxRowInd][mid] < mat[getMaxRowInd][mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return [-1, -1];
}

var getMaxRowEle = function (mat, row, col) {
    let max = -Infinity;
    let ind = 0;
    for (let i = 0; i < row; i++) {
        if (max < mat[i][col]) {
            max = mat[i][col];
            ind = i;
        }
    }

    return ind;
}

const nums = [[1, 4], [3, 2]]
console.log(findPeakElement(nums));