# digraph-sort

Revised: 2017-09-14 (version 0.2.0)

## Introduction

The digraph-sort package contains a few directed graph classes suitable for dependency graph sorting. The algorithms are based on chapter 4 of *Algorithms*, 4ed. by Robert Sedgewick and Kevin Wayne.

For example, to find the dependency order from variable references, let the refs array be a list of vertex pairs giving a directed edge indicating a reference from the first symbol to the second symbol.

```
const { Digraph, TopologicalOrder } = require('digraph-sort')
let refs = [['a', 'b'], ['b', 'c'], ['b', 'd'], ['d', 'e']]
let graph = new Digraph()
refs.forEach(edge => graph.addEdge(edge[0], edge[1]))
let dependencies = new TopologicalOrder(graph).dependencyOrder()
console.log(dependencies)
```

## Classes

### DepthFirstOrder

### Digraph

### DigraphReader

### DirectedCycle

### SymbolDigraphReader

### Topological

### TopologicalOrder

## Contact

Todd Fincannon
todd@toddfincannon.com
