var topologicalSort = function (v, adj) {
    const visited = new Array(v).fill(0);
    const st = [];

    function dfs(node) {
        visited[node] = 1;
        for (const n of adj[node]) {
            if (visited[n] === 0) {
                dfs(n);
            }
        }
        st.push(node)
    }
    for (let i = 0; i < v; i++) {
        if (visited[i] === 0) {
            dfs(i);
        }
    }

    let ans = [], i = 0;
    while (st.length > 0) {
        ans[i++] = st.pop();
    }
    return ans;
};



let V = 6;

let adj = [
    [2, 3],
    [3, 4],
    [2, 4],
    [4],
    [5],
    []
];

console.log(topologicalSort(V, adj));