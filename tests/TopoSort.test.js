const DigraphReader = require('../DigraphReader')
const SymbolDigraphReader = require('../SymbolDigraphReader')
const TopologicalOrder = require('../TopologicalOrder')

describe('TopologicalOrder', () => {
  test('jobs order', () => {
    let G = new SymbolDigraphReader('tests/jobs.txt', '/').digraph
    let topological = new TopologicalOrder(G)
    expect(topological.order.toString()).toBe('9,8,4,5,0,1,7,11,12,10,2,3,6')
  })
  test('tinyDAG order', () => {
    let G = DigraphReader('tests/tinyDAG.txt')
    let topological = new TopologicalOrder(G)
    expect(topological.order.toString()).toBe('8,7,2,3,0,6,9,10,11,12,1,5,4')
  })
  test('tinyDAG subgraph order from vertex 8', () => {
    let G = DigraphReader('tests/tinyDAG.txt')
    let topological = new TopologicalOrder(G, [8])
    expect(topological.order.toString()).toBe('8,7,6,4,9,10,11,12')
  })
  test('tinyDAG subgraph order from vertices 2 and 8', () => {
    let G = DigraphReader('tests/tinyDAG.txt')
    let topological = new TopologicalOrder(G, [2, 8])
    expect(topological.order.toString()).toBe('8,7,2,3,0,6,9,10,11,12,1,5,4')
  })
  test('jobs postorder', () => {
    let G = new SymbolDigraphReader('tests/jobs.txt', '/').digraph
    let topological = new TopologicalOrder(G)
    expect(topological.postorder.toString()).toBe('6,3,2,10,12,11,7,1,0,5,4,8,9')
  })
  test('tinyDAG postorder', () => {
    let G = DigraphReader('tests/tinyDAG.txt')
    let topological = new TopologicalOrder(G)
    expect(topological.postorder.toString()).toBe('4,5,1,12,11,10,9,6,0,3,2,7,8')
  })
})
