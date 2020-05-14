const Graphs = require('../graphs/graphs')

class FindDirectPath extends Graphs {
  getEdge (nodeA, nodeB) {
    let result = 'false, 0'
    const neighborArr = this.adjList.get(nodeA)
    for (const obj of neighborArr) {
      if (obj.node === nodeB) result = `true, ${obj.cost}`
    }
    return result
  }
}

module.exports = FindDirectPath
