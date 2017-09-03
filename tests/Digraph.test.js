const Digraph = require('../Digraph')
const DigraphReader = require('../DigraphReader')

describe('Digraph', () => {
  let G = new Digraph(3)
  let H = new Digraph(3)
  H.addEdge(0, 1)
  H.addEdge(1, 2)
  H.addEdge(1, 3)
  H.addEdge(2, 3)
  test('constructor saves number of vertices', () => {
    expect(G.V).toBe(3)
  })
  test('indegree size is number of vertices', () => {
    expect(G.indegree).toHaveLength(3)
  })
  test('indegree initialized to zero', () => {
    expect(G.indegree).toEqual([0, 0, 0])
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
  test('tinyDG input file has correct number of entries', () => {
    let D = DigraphReader('tests/tinyDG.txt')
    expect(D.V).toBe(13)
  })
})
