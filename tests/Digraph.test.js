const Digraph = require('../Digraph')
const DigraphReader = require('../DigraphReader')

describe('Digraph', () => {
  let D = DigraphReader('tests/tinyDG.txt')
  let G = new Digraph(3)
  let H = new Digraph(3)
  H.addEdge(0, 1)
  H.addEdge(1, 2)
  H.addEdge(1, 3)
  H.addEdge(2, 3)
  let K = new Digraph()
  let L = new Digraph()
  let c = ['a', 'b', 'c']
  L.addEdge(c[0], c[2])
  L.addEdge(c[0], c[1])

  test('constructor saves number of vertices', () => {
    expect(G.V).toBe(3)
  })
  test('indegree size is number of vertices', () => {
    expect(G.indeg).toHaveLength(3)
  })
  test('indegree initialized to zero', () => {
    expect(G.indeg).toEqual([0, 0, 0])
  })
  test('adjacency list size is number of vertices', () => {
    expect(G.adj).toHaveLength(3)
  })
  test('adjacency list entries are empty arrays', () => {
    expect(G.adj).toEqual([[], [], []])
  })
  test('number of edges', () => {
    expect(H.E).toBe(4)
  })
  test('graph listing', () => {
    expect(H.toString()).toBe('3 vertices, 4 edges\n0: 1 \n1: 3 2 \n2: 3 \n')
  })
  test('tinyDG input file has correct number of vertices', () => {
    expect(D.V).toBe(13)
  })
  test('tinyDG indegree', () => {
    expect(D.indegree(9)).toBe(3)
  })
  test('tinyDG outdegree', () => {
    expect(D.outdegree(9)).toBe(2)
  })
  test('digraph constructed with no args has zero vertices', () => {
    expect(K.V).toBe(0)
  })
  test('digraph constructed with values has the correct number of vertices', () => {
    expect(L.V).toBe(3)
  })
  test('digraph constructed with values has the correct number of edges', () => {
    expect(L.E).toBe(2)
  })
  test('digraph constructed with values graph listing', () => {
    expect(L.toString()).toBe('3 vertices, 2 edges\n0: 2 1 \n1: \n2: \n')
  })
  test('digraph values listing', () => {
    expect(L.values).toEqual(['a', 'c', 'b'])
  })
})
