// A similar implementation to the undirected approach but using
// objects instead of a map

const depthFirstPrint = (graph, source) => {
    const stack = [source]

    while(stack.length > 0) {
        const current = stack.pop()
        console.log(current)

        for(let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstRecursivePrint = (graph, source) => {
    console.log(source)
    for(let neighbor of graph[source]) {
        depthFirstRecursivePrint(graph, neighbor)
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [source]

    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//depthFirstPrint(graph, 'a')
//depthFirstRecursivePrint(graph, 'a')
breadthFirstPrint(graph, 'a')