function connectedComp(v, edges) {

    //build adjacency list from edges list
    const adjList = Array.from({ length: v }, () => []);

    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    //visted Array

    const visited = new Array(v).fill(false);
    let c = 0;

    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            c++;
            //start BFS
            let queue = [];
            queue.push(i);

            visited[i] = 1;

            while (queue.length > 0) {
                let v = queue.shift();
                //Visit all connected v

                for (const n of adjList[v]) {
                    if (!visited[n]) {
                        visited[n] = 1;
                        queue.push(n)
                    }
                }
            }
        }
    }
    return c;

}



const v = 7;
const edges = [[0, 1], [1, 2], [2, 3], [4, 5]]
console.log(connectedComp(v, edges));
