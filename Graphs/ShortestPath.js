// We use breadth first to calculate shortest path because it will find
// it faster than depth first search

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = new Set(nodeA)

    // the number represents the distance of the item in the queue
    const queue = [ [nodeA, 0] ]

    while (queue.length > 0) {
        const [ node, distance] = queue.shift()

        if(node === nodeB) return distance

        for(let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1])
                visited.add(neighbor)
            }
        }
    }

    return -1
}

const buildGraph = (edges) => {
    const graph = {}

    for(let edge of edges) {
        const [a, b] = edge
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

console.log(shortestPath(edges, 'w', 'z')) // -> 2