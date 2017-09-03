class Digraph {
  constructor(V) {
    this.V = V
    this.E = 0
    this.indegree = new Array(V).fill(0)
    this.adj = new Array(V)
    for (let v = 0; v < V; v++) {
      this.adj[v] = []
    }
  }
  addEdge(v, w) {
    // Filter out parallel edges and self edges.
    if (v !== w && this.adj[v].includes(w) === false) {
      this.adj[v].unshift(w)
      this.indegree[w]++
      this.E++
    }
  }
  outdegree(v) {
    return this.adj[v].length
  }
  toString() {
    let buf = ''
    buf += `${this.V} vertices, ${this.E} edges\n`
    for (let v = 0; v < this.V; v++) {
      buf += `${v}: `
      for (let w of this.adj[v]) {
        buf += `${w} `
      }
      buf += '\n'
    }
    return buf
  }
  reverse() {
    let reverse = new Digraph(this.V)
    for (let v = 0; v < this.V; v++) {
      for (let w of this.adj[v]) {
        reverse.addEdge(w, v)
      }
    }
    return reverse
  }
}

module.exports = Digraph
