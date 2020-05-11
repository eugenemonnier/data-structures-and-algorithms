const Graphs = require('../depth-first')

const graph = new Graphs()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addNode('G')
graph.addNode('H')
graph.addEdge('A', 'B', 2)
graph.addEdge('A', 'D', 3)
graph.addEdge('B', 'C', 3)
graph.addEdge('B', 'D', 1)
graph.addEdge('C', 'G', 4)
graph.addEdge('D', 'E', 6)
graph.addEdge('D', 'H', 5)
graph.addEdge('D', 'F', 17)
graph.addEdge('H', 'F', 17)

describe('depth-first module', () => {
  test('should return an array of values in depth first order', () => {
    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'])
  })

  test('should return an empty array', () => {
    const noNodes = new Graphs()
    expect(noNodes.depthFirst('A')).toEqual([])
  })

  test('should return only the root', () => {
    const noEdges = new Graphs()
    noEdges.addNode('A')
    noEdges.addNode('B')
    noEdges.addNode('C')
    noEdges.addNode('D')
    noEdges.addNode('E')
    noEdges.addNode('F')
    noEdges.addNode('G')
    noEdges.addNode('H')
    expect(noEdges.depthFirst('A')).toEqual(['A'])
  })
})
