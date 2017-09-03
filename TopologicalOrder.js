// Do a topological sort on a directed acyclic graph.
// The "order" property contains the order.
// The "postorder" property is the order of the reversed digraph.

class TopologicalOrder {
  constructor(G, sources = null) {
    this.G = G
    this.marked = new Array(G.V).fill(false)
    this.postorder = []
    let dfs = (G, v) => {
      this.marked[v] = true
      for (let w of G.adj[v]) {
        if (!this.marked[w]) {
          dfs(G, w)
        }
      }
      this.postorder.push(v)
    }
    let dfsFromV = v => {
      if (!this.marked[v]) {
        dfs(G, v)
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
  reversedVertices() {
    return this.postorder
  }
  reversedValues() {
    return this.postorder.map(v => this.G.values[v])
  }
  dependencyOrder() {
    return this.reversedValues()
  }
}

module.exports = TopologicalOrder
