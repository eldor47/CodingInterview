

// Depth first recursive traversal, will find the first path available

// Only works if acyclic
const hasPath = (graph, src, dst) => {
    if( src === dst) return true

    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst) === true) {
            return true
        }
    }

    return false
}

const hasPathBreadthFirst = (graph, src, dst) => {
    const queue = [ src ]
    
    while(queue.length > 0) {
        const current = queue.shift() 
        if(current == dst) return true

        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(hasPathBreadthFirst(graph, 'a', 'f'))