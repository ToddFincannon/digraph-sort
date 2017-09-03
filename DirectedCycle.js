class DirectedCycle {
  constructor(G) {
    this.marked = new Array(G.V).fill(false)
    this.onStack = new Array(G.V).fill(false)
    this.edgeTo = new Array(G.V).fill(0)
    this.cycle = null
    for (let v = 0; v < G.V; v++) {
      if (!this.marked[v] && this.cycle === null) {
        this.dfs(G, v)
      }
    }
  }
  dfs(G, v) {
    this.onStack[v] = true
    this.marked[v] = true
    for (let w of G.adj[v]) {
      if (this.cycle !== null) {
        return
      } else if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(G, w)
      } else if (this.onStack[w]) {
        this.cycle = []
        for (let x = v; x != w; x = this.edgeTo[x]) {
          this.cycle.unshift(x)
        }
        this.cycle.unshift(w)
        this.cycle.unshift(v)
      }
    }
    this.onStack[v] = false
  }
  hasCycle() {
    return this.cycle !== null
  }
}

module.exports = DirectedCycle
