class Graph {
  constructor () {
    this.nodeArr = []
    this.adjList = new Map()
  }

  addNode (val) {
    this.nodeArr.push(val)
    this.adjList.set(val, [])
  }

  addEdge (nodeA, nodeB, cost) {
    this.adjList.get(nodeA).push({ node: nodeB, cost: cost })
    this.adjList.get(nodeB).push({ node: nodeA, cost: cost })
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
