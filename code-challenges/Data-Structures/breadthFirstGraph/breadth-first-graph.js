const Graphs = require('../graphs/graphs')
const { Queue } = require('../stacksAndQueues/stacks-and-queues')

class BFT extends Graphs {
  breadthFirst (node) {
    const result = []
    const visited = []
    const nodeQueue = new Queue()
    this.adjList.forEach((value, key) => {
      visited.push({ [key]: false })
    })
    visited[node] = true
    nodeQueue.enqueue(node)

    while (!nodeQueue.isEmpty()) {
      const queuedNode = nodeQueue.dequeue()
      const neighborList = this.adjList.get(queuedNode)
      neighborList.forEach(currNeighbor => {
        if (!visited[currNeighbor]) {
          visited[currNeighbor] = true
          nodeQueue.enqueue(currNeighbor)
        }
      })
      result.push(queuedNode)
    }
    return result
  }
}

module.exports = BFT
