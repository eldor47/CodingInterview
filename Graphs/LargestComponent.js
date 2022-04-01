
const connectedComponents = (graph) => {
    const visited = new Set()
    let longest = 0
    for(let node in graph) {
        // Start traversal
        const size = exploreSize(graph, node, visited)
        if(size > longest) longest = size
    }
    return longest
}

const exploreSize = (graph, current, visited) => {
    // Has already been visited leave
    if(visited.has(parseInt(current))) return 0

    visited.add(parseInt(current))
    
    let size = 1
    for(let neighbor of graph[current]) {
        size += exploreSize(graph, neighbor, visited)
    }
    // Return true because it finished the callstack
    return size
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