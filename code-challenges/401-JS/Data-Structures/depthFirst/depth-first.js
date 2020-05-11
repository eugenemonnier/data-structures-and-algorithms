const Graphs = require('../graphs/graphs')

class DepthFirstGraph extends Graphs {
  depthFirst (root) {
    const visited = []
    const results = []
    if (this.nodeArr.length === 0) return results
    this.nodeArr.forEach(node => visited.push(node))
    this.DPT(root, visited, results)
    return results
  }

  DPT (node, visited, results) {
    if (!visited[node]) {
      visited[node] = true
      results.push(node)
    } else return results
    const neighbors = this.adjList.get(node)
    neighbors.forEach(neighbor => this.DPT(neighbor.node, visited, results))
  }
}

module.exports = DepthFirstGraph
