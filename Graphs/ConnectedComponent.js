
const connectedComponents = (graph) => {
    const visited = new Set()
    let count = 0
    for(let node in graph) {
        // Start traversal
       if(explore(graph, node, visited) === true) {
           count++
       }
    }
    return count
}

const explore = (graph, current, visited) => {
    // Has already been visited leave
    if(visited.has(parseInt(current))) return false

    visited.add(parseInt(current))
    
    for(let neighbor of graph[current]) {
        explore(graph, neighbor, visited)
    }
    // Return true because it finished the callstack
    return true
}


const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
} // -> 2


console.log(connectedComponents(graph))