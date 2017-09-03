const DigraphReader = require('../DigraphReader')
const DirectedCycle = require('../DirectedCycle')

describe('DirectedCycle', () => {
  let DG = DigraphReader('tests/tinyDG.txt')
  let dgDC = new DirectedCycle(DG)
  let DAG = DigraphReader('tests/tinyDAG.txt')
  let dagDC = new DirectedCycle(DAG)
  test('cycle found', () => {
    expect(dgDC.hasCycle()).toBeTruthy()
  })
  test('cycle contents', () => {
    expect(dgDC.cycle.toString()).toBe('3,5,4,3')
  })
  test('cycle not found', () => {
    expect(dagDC.hasCycle()).toBeFalsy()
  })
})
