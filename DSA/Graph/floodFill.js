var floodFill = function (image, sr, sc, color) {

    //DFS matric traversal

    let m = image.length;
    let n = image[0].length;

    let visited = Array.from({
        length: m
    }, () => Array(n).fill(false));


    let colorToReplace = image[sr][sc];

    function dfs(row, col) {
        console.log(row, col);

        if (row < 0 || col < 0 || row >= m || col >= n)
            return;

        if (visited[row][col]) return;

        if (image[row][col] !== colorToReplace) return;

        visited[row][col] = true;
        image[row][col] = color;



        // Up
        dfs(row - 1, col);

        // Down
        dfs(row + 1, col);

        // Left
        dfs(row, col - 1);

        // Right
        dfs(row, col + 1);

    }

    dfs(sr, sc)


    return image;
};

var floodFillBFS = function (image, sr, sc, color) {

    const m = image.length;
    const n = image[0].length;

    const visited = Array.from(
        { length: m },
        () => new Array(n).fill(false)
    );

    let queue = [[sr, sc]];
    visited[sr][sc] = true;

    let colorToBeChange = image[sr][sc];

    // If same color, no need to do BFS
    if (colorToBeChange === color) return image;

    while (queue.length > 0) {

        let [row, col] = queue.shift();

        // Change current cell
        image[row][col] = color;

        // Up
        if (row - 1 >= 0 && !visited[row - 1][col]) {

            if (image[row - 1][col] === colorToBeChange) {
                visited[row - 1][col] = true;
                queue.push([row - 1, col]);
            }
        }

        // Down
        if (row + 1 < m && !visited[row + 1][col]) {

            if (image[row + 1][col] === colorToBeChange) {
                visited[row + 1][col] = true;
                queue.push([row + 1, col]);
            }
        }

        // Left
        if (col - 1 >= 0 && !visited[row][col - 1]) {

            if (image[row][col - 1] === colorToBeChange) {
                visited[row][col - 1] = true;
                queue.push([row, col - 1]);
            }
        }

        // Right
        if (col + 1 < n && !visited[row][col + 1]) {

            if (image[row][col + 1] === colorToBeChange) {
                visited[row][col + 1] = true;
                queue.push([row, col + 1]);
            }
        }
    }

    return image;
};

// Input: image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, color = 2

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];

let sr = 1;
let sc = 1;
let color = 2;

console.log(floodFillBFS(image, sr, sc, color));