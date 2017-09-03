class Digraph {
  constructor(V = 0) {
    this.V = V
    this.E = 0
    this.indeg = new Array(V).fill(0)
    this.values = []
    this.adj = new Array(V)
    for (let v = 0; v < V; v++) {
      this.adj[v] = []
    }
  }
  addEdge(v, w) {
    // Filter out parallel edges.
    if (v !== w) {
      // If objects were passed, convert them to value cache index numbers
      // that will also serve as vertex numbers.
      if (typeof v !== 'number') {
        v = this.valueIndex(v)
      }
      if (typeof w !== 'number') {
        w = this.valueIndex(w)
      }
      // Filter out self edges.
      if (this.adj[v].includes(w) === false) {
        this.adj[v].unshift(w)
        this.indeg[w]++
        this.E++
      }
    }
  }
  indegree(v) {
    return this.indeg[v]
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
  valueIndex(x) {
    let i = this.values.indexOf(x)
    if (i < 0) {
      // Add a vertex associated with the value.
      i = this.values.push(x) - 1
      this.V++
      this.adj[i] = []
    }
    return i
  }
}

module.exports = Digraph
