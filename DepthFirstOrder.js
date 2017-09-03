class DepthFirstOrder {
  constructor(G) {
    this.marked = new Array(G.V).fill(false)
    this.pre = new Array(G.V).fill(0)
    this.post = new Array(G.V).fill(0)
    this.preorder = []
    this.postorder = []
    this.preCounter = 0
    this.postCounter = 0
    for (let v = 0; v < G.V; v++) {
      if (!this.marked[v]) {
        this.dfs(G, v)
      }
    }
  }
  dfs(G, v) {
    this.marked[v] = true
    this.pre[v] = this.preCounter++
    this.preorder.push(v)
    for (let w of G.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(G, w)
      }
    }
    this.postorder.push(v)
    this.post[v] = this.postCounter++
  }
  reversePost() {
    return this.postorder.slice().reverse()
  }
}

module.exports = DepthFirstOrder
