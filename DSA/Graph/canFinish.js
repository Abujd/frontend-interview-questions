var canFinish = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    //Fill list & indegree

    for (const [c, pre] of prerequisites) {
        adj[pre].push(c);
        inDegree[c]++;

    }

    const queue = [];
    //take pre with 0 in degree 
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let c = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        c++;
        for (const n of adj[node]) {
            inDegree[n]--;
            if (inDegree[n] === 0) {
                queue.push(n)
            }

        }
    }
    // Return true if all nodes processed
    return c === numCourses;

}

let numCourses = 4;

let prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2]
];


console.log(canFinish(numCourses, prerequisites));



// var canFinish = function (numCourses, prerequisites) {

//     const adj = Array.from(
//         { length: numCourses },
//         () => []
//     );

//     // Build graph
//     for (const [course, prerequisite] of prerequisites) {
//         adj[prerequisite].push(course);
//     }

//     const visited = new Array(numCourses).fill(0);

//     function dfs(v) {

//         // Currently in DFS path → cycle
//         if (visited[v] === 1) {
//             return true;
//         }

//         // Already completely processed
//         if (visited[v] === 2) {
//             return false;
//         }

//         // Mark as currently visiting
//         visited[v] = 1;

//         for (const n of adj[v]) {
//             if (dfs(n)) {
//                 return true;
//             }
//         }

//         // DFS completed
//         visited[v] = 2;

//         return false;
//     }

//     for (let i = 0; i < numCourses; i++) {

//         if (dfs(i)) {
//             return false;
//         }
//     }

//     return true;
// };

// let numCourses = 2, prerequisites = [[1, 0]]
// console.log(canFinish(numCourses, prerequisites));