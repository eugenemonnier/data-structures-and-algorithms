const Graphs = require('../graphs/graphs')
const { Queue } = require('../stacksAndQueues/stacks-and-queues')

class BFT extends Graphs {
  breadthFirst (node) {
    const result = []
    const visited = []
    const nodeQueue = new Queue()
    this.adjList.forEach(visitedList)
    function visitedList (value, key, map) {
      visited.push({ [key]: false })
    }
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

const graph = new BFT()
graph.addNode('Jakku')
graph.addNode('Takodana')
graph.addNode('Starkiller Base')
graph.addNode('Kijimi')
graph.addNode('Kef Bir')
graph.addNode('Exegol')
graph.addEdge('Jakku', 'Takodana')
graph.addEdge('Kijimi', 'Takodana')
graph.addEdge('Jakku', 'Starkiller Base')
graph.addEdge('Starkiller Base', 'Takodana')
graph.addEdge('Starkiller Base', 'Kijimi')
graph.addEdge('Starkiller Base', 'Kef Bir')
graph.addEdge('Kijimi', 'Kef Bir')
graph.addEdge('Exegol', 'Kef Bir')
console.log(graph.breadthFirst('Jakku'))

module.exports = BFT
