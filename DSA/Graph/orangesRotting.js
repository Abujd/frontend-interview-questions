var orangesRotting = function (grid) {
    if (grid.length < 0) return 0;
    //Rows and cols 

    let m = grid.length;
    let n = grid[0].length;

    //total orgs, rottaon orgs
    let total = 0, count = 0;
    let rottonQueue = [];


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                total++;
            }
            if (grid[i][j] === 2) {
                rottonQueue.push([i, j]);
            }
        }
    }
    //BFS
    //  Variable to track minutes
    let days = 0;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (rottonQueue.length > 0) {

        let k = rottonQueue.length;
        count += k;

        //process each organge

        for (let i = 0; i < k; i++) {
            let [x, y] = rottonQueue.shift();

            for (const [dx, dy] of directions) {
                let nx = dx + x;
                let ny = dy + y;

                // Skip if out of bounds or not fresh
                if (nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] !== 1)
                    continue;

                //Mark fresh orange as a rotten
                grid[nx][ny] = 2;

                // Add rotten orange in queue

                rottonQueue.push([nx, ny]);
            }

        }
        //For remainign oranges

        if (rottonQueue.length > 0) days++;

    }

    //if rotton === total (!,2 ) then return

    return count === total ? days : -1;
};




// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]

let grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];

console.log(orangesRotting(grid));