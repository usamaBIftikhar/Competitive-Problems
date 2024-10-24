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
  addEdge(vrt1, vrt2) {
    if (this.adjacencyList[vrt1] && this.adjacencyList[vrt2]) {
      this.adjacencyList[vrt1].push(vrt2);
      this.adjacencyList[vrt2].push(vrt1);
      return true;
    }
    return false;
  }
  removeEdge(vrt1, vrt2) {
    if (this.adjacencyList[vrt1] && this.adjacencyList[vrt2]) {
      this.adjacencyList[vrt1] = this.adjacencyList[vrt2].filter(
        (v) => v !== vrt2
      );
      this.adjacencyList[vrt2] = this.adjacencyList[vrt2].filter(
        (v) => v !== vrt1
      );
      return true;
    }
    return false;
  }
  removeVertex(vrt) {
    if (!this.adjacencyList[vrt]) return undefined;

    for (let neigbor of this.adjacencyList[vrt]) {
      this.adjacencyList[neigbor] = this.adjacencyList[neigbor].filter(
        (v) => v !== vrt
      );
    }
    delete this.adjacencyList[vrt];
    return this;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
console.log(graph);
