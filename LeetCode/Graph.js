class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vrtx) {
    if (!this.adjacencyList[vrtx]) {
      this.adjacencyList[vrtx] = [];
    }
    return false;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
console.log(graph);
