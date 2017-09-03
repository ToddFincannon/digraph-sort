const fs = require('fs-extra')
const Digraph = require('./Digraph')

class SymbolDigraphReader {
  constructor(inputPathname, delimiter) {
    this.symbolTable = null
    this.names = null
    this.digraph = null
    try {
      let lines = fs.readFileSync(inputPathname, 'utf8').split(/\r?\n/)
      let index = 0
      // Index each unique name in a symbol table.
      this.symbolTable = {}
      for (let line of lines) {
        if (line != '') {
          let a = line.split(delimiter)
          for (let i = 0; i < a.length; i++) {
            if (this.symbolTable[a[i]] === undefined) {
              this.symbolTable[a[i]] = index++
            }
          }
        }
      }
      let stSize = Object.keys(this.symbolTable).length
      // Index names by their vertex number.
      this.names = new Array(stSize)
      for (let name of Object.keys(this.symbolTable)) {
        let v = this.symbolTable[name]
        this.names[v] = name
      }
      // Build a digraph connecting the first vertex on each line to the others.
      this.digraph = new Digraph(stSize)
      for (let line of lines) {
        let a = line.split(delimiter)
        let v = this.symbolTable[a[0]]
        for (let i = 1; i < a.length; i++) {
          let w = this.symbolTable[a[i]]
          this.digraph.addEdge(v, w)
        }
      }
    } catch (e) {
      console.error(e.message)
    }
  }
}
module.exports = SymbolDigraphReader
