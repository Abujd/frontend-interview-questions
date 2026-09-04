var findOrder = function (numCourses, prerequisites) {
    //Build Adj list

    const adj = Array.from({
        length: numCourses
    }, () => []);

    // Create Indegree Array with 0 of size numCourses

    const inDegree = new Array(numCourses).fill(0);

    //now fill the adj and inDegree Array

    for (const [a, b] of prerequisites) {
        adj[b].push(a);
        inDegree[a]++;

    }

    //Declare a Queue for BFS and Res for course completion order

    const queue = [], res = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        let node = queue.shift();
        res.push(node);

        for (const n of adj[node]) {
            inDegree[n]--;
            if (inDegree[n] === 0) {
                queue.push(n);
            }
        }
    }
    return res.length === numCourses ? res : [];
};


// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]

let numCourses = 4;

let prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2]
];

console.log(findOrder(numCourses, prerequisites));