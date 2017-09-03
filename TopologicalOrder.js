// Do a topological sort on a directed acyclic graph.
// The "order" property contains the order.
// The "postorder" property is the order of the reversed digraph.

class TopologicalOrder {
  constructor(G, sources = null) {
    this.marked = new Array(G.V).fill(false)
    this.postorder = []
    let dfsFromV = v => {
      if (!this.marked[v]) {
        this.dfs(G, v)
      }
    }
    if (sources) {
      // Visit vertices reachable from each source vertex.
      for (let v of sources) {
        dfsFromV(v)
      }
    } else {
      // Visit all vertices.
      for (let v = 0; v < G.V; v++) {
        dfsFromV(v)
      }
    }
    this.order = this.postorder.slice().reverse()
  }
  dfs(G, v) {
    this.marked[v] = true
    for (let w of G.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(G, w)
      }
    }
    this.postorder.push(v)
  }
}

module.exports = TopologicalOrder
