class Graph {
  constructor () {
    this.nodeArr = []
    this.adjList = new Map()
  }

  addNode (val) {
    this.nodeArr.push(val)
    this.adjList.set(val, [])
  }

  addEdge (nodeA, nodeB) {
    this.adjList.get(nodeA).push(nodeB)
    this.adjList.get(nodeB).push(nodeA)
  }

  getNodes () {
    return this.nodeArr
  }

  getNeighbors (node) {
    return this.adjList.get(node)
  }

  size () {
    return this.adjList.size
  }
}

module.exports = Graph
