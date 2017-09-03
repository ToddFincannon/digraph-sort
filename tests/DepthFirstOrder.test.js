const DigraphReader = require('../DigraphReader')
const DepthFirstOrder = require('../DepthFirstOrder')

describe('DepthFirstOrder', () => {
  let G = DigraphReader('tests/tinyDAG.txt')
  let dfs = new DepthFirstOrder(G)
  test('preorder', () => {
    expect(dfs.preorder.toString()).toBe('0,5,4,1,6,9,11,12,10,2,3,7,8')
  })
  test('postorder', () => {
    expect(dfs.postorder.toString()).toBe('4,5,1,12,11,10,9,6,0,3,2,7,8')
  })
  test('reverse preorder', () => {
    expect(dfs.reversePost().toString()).toBe('8,7,2,3,0,6,9,10,11,12,1,5,4')
  })
})
