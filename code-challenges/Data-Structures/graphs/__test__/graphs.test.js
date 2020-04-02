const Graph = require('../graphs')

const graph = new Graph()
graph.addNode('A')
graph.addNode('B')

describe('Graph module', () => {
  describe('constructor', () => {
    test('should create a Graph instance', () => {
      expect(graph).toBeInstanceOf(Graph)
    })
  })
  describe('addNode', () => {
    test('should increment size of adjList of graph instance', () => {
      expect(graph.adjList.size).toBe(2)
    })
    test('should add value(s) to nodeArr of graph instance', () => {
      expect(graph.nodeArr).toEqual(['A', 'B'])
    })
    test('Should add key value pairs to adjList of graph instance', () => {
      expect(graph.adjList.get('A')).toEqual([])
      expect(graph.adjList.get('B')).toEqual([])
    })
  })
  describe('addEdge', () => {
    test('should update adjList key\'s value of graph instance', () => {
      graph.addEdge('A', 'B', 2)
      expect(graph.adjList.get('A')).toMatchObject([{ node: 'B', cost: 2 }])
      expect(graph.adjList.get('B')).toMatchObject([{ node: 'A', cost: 2 }])
    })
  })
  describe('getNodes', () => {
    test('should return a list of nodes in the graph instance', () => {
      expect(graph.getNodes()).toEqual(['A', 'B'])
    })
  })
  describe('getNeighbors & size', () => {
    test('getNeighbors should return a list of neighboring nodes in the graph instance', () => {
      graph.addNode('C')
      graph.addNode('D')
      graph.addNode('E')
      graph.addEdge('B', 'C', 3)
      graph.addEdge('B', 'D', 6)
      graph.addEdge('B', 'E', 1)
      graph.addEdge('A', 'E', 9)
      graph.addEdge('C', 'D', 2)
      graph.addEdge('D', 'E', 4)
      expect(graph.getNeighbors('B')).toMatchObject([{ node: 'A', cost: 2 }, { node: 'C', cost: 3 }, { node: 'D', cost: 6 }, { node: 'E', cost: 1 }])
    })
    test('size should return the number of nodes in the graph instance', () => {
      expect(graph.size()).toBe(5)
    })
  })
})
