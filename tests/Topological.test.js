const DigraphReader = require('../DigraphReader')
const SymbolDigraphReader = require('../SymbolDigraphReader')
const Topological = require('../Topological')

describe('Topological', () => {
  test('jobs order', () => {
    let G = new SymbolDigraphReader('tests/jobs.txt', '/').digraph
    let topological = new Topological(G)
    expect(topological.order.toString()).toBe('9,8,4,5,0,1,7,11,12,10,2,3,6')
  })
  test('tinyDAG order', () => {
    let G = DigraphReader('tests/tinyDAG.txt')
    let topological = new Topological(G)
    expect(topological.order.toString()).toBe('8,7,2,3,0,6,9,10,11,12,1,5,4')
  })
  test('tinyDG has no order', () => {
    let G = DigraphReader('tests/tinyDG.txt')
    let topological = new Topological(G)
    expect(topological.order).toBeNull()
  })
})
