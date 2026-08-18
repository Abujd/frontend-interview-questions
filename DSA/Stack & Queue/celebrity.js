let celebrity = function celebrity(m) {

    // let iknow = new Array(m.length).fill(0), knowMe = new Array(m.length).fill(0);
    // for (let i = 0; i < m.length; i++) {
    //     for (j = 0; j < m.length; j++) {
    //         if (m[i][j] === 1) {
    //             iknow[i]++;
    //             knowMe[j]++;
    //         }
    //     }
    // }
    // for (let i = 0; i < m.length; i++) {
    //     if (iknow[i] === 0 && knowMe[i] === (m.length - 1))
    //         return i;
    // }
    // return -1;


    let n = m.length;
    let top = 0, down = n - 1;
    while (top < down) {
        if (m[top][down] === 1) {
            top++;

        } else if (m[down][top] === 1) {
            down--;

        } else {
            top++;
            down--;
        }
    }
    if (top > down) return -1;

    for (let i = 0; i < n; i++) {
        if (i === top) continue;

        if (m[top][i] !== 0 || m[i][top] !== 1) {
            return -1;
        }
    }
    return top;
}

const M = [[0, 1], [1, 0]];

console.log(celebrity(M));
