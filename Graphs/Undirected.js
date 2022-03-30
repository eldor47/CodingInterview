

// Airports routes example

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
]

// Use map as more efficient than array
const adjacencyList = new Map()

function addNode(airport) {
    adjacencyList.set(airport, [])
}

// Add edge undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

// create the graph

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))


console.log(adjacencyList)


// Great if you want to find all possible destinations
function bfs(start) {
    const queue = [start]

    // To check all visited airports and not infinite loop  
    const visited = new Set()

    while(queue.length > 0) {
        const airport = queue.shift()

        const destinations = adjacencyList.get(airport)
        for(const destination of destinations){
            if(destination === 'BKK'){
                console.log('found')
            }

            if(!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
            }
        }
    }
}

// O(N)
var steps = 1
function dfs(start, visited = new Set()) {

    visited.add(start)

    const destinations = adjacencyList.get(start)
    for(const destination of destinations) {
        if(destination === 'BKK') {
            console.log(`DFS found Bangkok in ${steps} steps`)
            return;
        }

        if(!visited.has(destination)) {
            steps++
            dfs(destination, visited)
        }
    }
}

bfs('PHX')
//dfs('PHX')