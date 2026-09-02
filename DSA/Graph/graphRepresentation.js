class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = Array.from({ length: vertices }, () => []);

    }
    addEdge(u, v) {
        this.adjList[u].push(v);
        this.adjList[v].push(u);

    }
    printGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log(`${i} -> ${this.adjList[i].join(" ")}`);

        }
    }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.printGraph();
