const Graphs = require('../get-edge')

const graph = new Graphs()
graph.addNode('Jakku')
graph.addNode('Takodana')
graph.addNode('Starkiller Base')
graph.addNode('Kijimi')
graph.addNode('Kef Bir')
graph.addNode('Exegol')
graph.addEdge('Jakku', 'Takodana', 2)
graph.addEdge('Kijimi', 'Takodana', 3)
graph.addEdge('Jakku', 'Starkiller Base', 3)
graph.addEdge('Starkiller Base', 'Takodana', 1)
graph.addEdge('Starkiller Base', 'Kijimi', 4)
graph.addEdge('Starkiller Base', 'Kef Bir', 6)
graph.addEdge('Kijimi', 'Kef Bir', 5)
graph.addEdge('Exegol', 'Kef Bir', 17)

describe('GetEdge module', () => {
  test('should return a string with a positive result from query', () => {
    expect(graph.getEdge('Kef Bir', 'Exegol')).toEqual('true, 17')
  })

  test('should return same results from either direction', () => {
    expect(graph.getEdge('Kef Bir', 'Exegol')).toEqual(graph.getEdge('Exegol', 'Kef Bir'))
  })

  test('should return a string with a negative result from query', () => {
    expect(graph.getEdge('Jakku', 'Exegol')).toEqual('false, 0')
  })
})
