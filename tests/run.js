const Digraph = require('../Digraph')
const DigraphReader = require('../DigraphReader')
const DepthFirstOrder = require('../DepthFirstOrder')
const SymbolDigraphReader = require('../SymbolDigraphReader')
const DirectedCycle = require('../DirectedCycle')
const Topological = require('../Topological')
const TopologicalOrder = require('../TopologicalOrder')
const sprintf = require('voca/sprintf')

let cmds = [
  'depthfirstorder',
  'digraph',
  'directedcycle',
  'references',
  'symboldigraph',
  'topological',
  'topologicalsymbol',
  'toposort',
  'visdata'
]

let usage = () => {
  console.log('usage: run {command} {args}')
  console.log('commands:')
  for (let cmd of cmds) {
    console.log(`  ${cmd}`)
  }
  process.exit(1)
}

let cmd = process.argv[2]
if (!cmd || !cmds.includes(cmd)) {
  usage()
}
let arg1 = process.argv[3]
let arg2 = process.argv[4]

if (cmd === 'digraph') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  console.log(G.toString())
  let R = G.reverse()
  console.log(R.toString())
}

if (cmd === 'symboldigraph') {
  if (!arg1 || !arg2) {
    usage()
  }
  let sg = new SymbolDigraphReader(arg1, arg2)
  let G = sg.digraph
  // console.log(G.toString());
  // console.log(sg.symbolTable);
  for (let v = 0; v < G.V; v++) {
    console.log(sprintf('%4d: %s', v, sg.names[v]))
    for (let w of G.adj[v]) {
      console.log(`        ${sg.names[w]}`)
    }
  }
}

if (cmd === 'depthfirstorder') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  let dfs = new DepthFirstOrder(G)
  // Print the pre and post order sequence number for each vertex.
  // console.log('   v  pre post')
  // console.log('--------------')
  // for (let v = 0; v < G.V; v++) {
  //   console.log(sprintf('%4d %4d %4d', v, dfs.pre[v], dfs.post[v]))
  // }
  // console.log()
  // Print the vertices in each order.
  console.log(`preorder ${dfs.preorder.toString()}`)
  console.log(`postorder ${dfs.postorder.toString()}`)
  console.log(`reverse postorder ${dfs.reversePost().toString()}`)
}

if (cmd === 'directedcycle') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  let finder = new DirectedCycle(G)
  if (finder.hasCycle()) {
    let buf = 'Directed cycle: '
    for (let v of finder.cycle) {
      buf += `${v} `
    }
    console.log(buf)
  } else {
    console.log('No directed cycle')
  }
}

if (cmd === 'topological') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  let topological = new Topological(G)
  console.log(G.toString())
  if (topological.order) {
    console.log(`\nTopological order: ${topological.order}`)
  } else {
    console.log('Directed cycle found: no topological order exists')
  }
}

if (cmd === 'toposort') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  let topological = new TopologicalOrder(G)
  console.log(G.toString())
  if (topological.order) {
    console.log(`\nTopological order: ${topological.order}`)
  } else {
    console.log('Directed cycle found: no topological order exists')
  }
}

if (cmd === 'topologicalsymbol') {
  if (!arg1 || !arg2) {
    usage()
  }
  let sg = new SymbolDigraphReader(arg1, arg2)
  let topological = new Topological(sg.digraph)
  console.log(`\nTopological order: ${topological.order}`)
  for (let v = 0; v < topological.order.length; v++) {
    console.log(sg.names[topological.order[v]])
  }
}

if (cmd === 'visdata') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  console.log('let g = [')
  for (let v = 0; v < G.V; v++) {
    console.log(`{ v: ${v}, adj: [${G.adj[v].toString()}] },`)
  }
  console.log(']')
}

if (cmd === 'references') {
  if (!arg1) {
    usage()
  }
  let G = DigraphReader(arg1)
  console.log('references graph')
  console.log(G.toString())
  let R = G.reverse()
  console.log('used by graph')
  console.log(R.toString())
  let T = new Topological(R)
  if (T.order) {
    console.log(`order: ${T.order}`)
  } else {
    console.log('directed cycle found: no order exists')
  }
}
