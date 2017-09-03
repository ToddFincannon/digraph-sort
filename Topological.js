const DepthFirstOrder = require('./DepthFirstOrder')
const DirectedCycle = require('./DirectedCycle')

class Topological {
  constructor(G) {
    this.order = null
    let finder = new DirectedCycle(G)
    if (!finder.hasCycle()) {
      let dfs = new DepthFirstOrder(G)
      this.order = dfs.reversePost()
    }
  }
}

module.exports = Topological
