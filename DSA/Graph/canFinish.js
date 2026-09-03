var canFinish = function (numCourses, prerequisites) {

    const adj = Array.from(
        { length: numCourses },
        () => []
    );

    // Build graph
    for (const [course, prerequisite] of prerequisites) {
        adj[prerequisite].push(course);
    }

    const visited = new Array(numCourses).fill(0);

    function dfs(v) {

        // Currently in DFS path → cycle
        if (visited[v] === 1) {
            return true;
        }

        // Already completely processed
        if (visited[v] === 2) {
            return false;
        }

        // Mark as currently visiting
        visited[v] = 1;

        for (const n of adj[v]) {
            if (dfs(n)) {
                return true;
            }
        }

        // DFS completed
        visited[v] = 2;

        return false;
    }

    for (let i = 0; i < numCourses; i++) {

        if (dfs(i)) {
            return false;
        }
    }

    return true;
};

let numCourses = 2, prerequisites = [[1, 0]]
console.log(canFinish(numCourses, prerequisites));