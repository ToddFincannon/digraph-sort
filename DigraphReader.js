const fs = require('fs-extra')
const Digraph = require('./Digraph')

// Read a graph using the file format in Algorithms 4ed. (Sedgewick & Wayne)

let DigraphReader = inputPathname => {
  let G = null
  try {
    let lines = fs.readFileSync(inputPathname, 'utf8').split(/\r?\n/)
    let V = parseInt(lines[0])
    let E = parseInt(lines[1])
    G = new Digraph(V)
    for (let line of lines.slice(2)) {
      let f = line.trim().split(/\s+/)
      if (f.length >= 2) {
        let v = parseInt(f[0])
        let w = parseInt(f[1])
        G.addEdge(v, w)
      }
    }
  } catch (e) {
    console.error(e.message)
  }
  return G
}

module.exports = DigraphReader
