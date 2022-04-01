const islandCount = (grid) => {
    const visited = new Set()
    let count = 0
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++){
            if (explore(grid, r, c, visited) === true){
                count++
            }
        }
    }
    return count
}

const smallestIsland = (grid) => {
    const visited = new Set()
    let minSize = Infinity;
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++){
            var size = exploreSize(grid, r, c, visited)
            if (size > 0 && size < minSize){
                minSize = size
            }
        }
    }
    return minSize
}

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length

    if(!rowInbounds || !colInbounds) return 0

    if(grid[r][c] === 'W') return 0

    const position = `${r},${c}`
    if(visited.has(position)) return 0
    visited.add(position)

    // If we get here its unvisited!
    // Up, down, left, right
    let size = 1
    size += exploreSize(grid, r-1, c, visited)
    size += exploreSize(grid, r+1, c, visited)
    size += exploreSize(grid, r, c-1, visited)
    size += exploreSize(grid, r, c+1, visited)

    // finished depth first search
    return size
}

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length

    if(!rowInbounds || !colInbounds) return false

    if(grid[r][c] === 'W') return false

    const position = `${r},${c}`
    if(visited.has(position)) return false
    visited.add(position)

    // If we get here its unvisited!
    // Up, down, left, right
    explore(grid, r-1, c, visited)
    explore(grid, r+1, c, visited)
    explore(grid, r, c-1, visited)
    explore(grid, r, c+1, visited)

    // finished depth first search
    return true
}


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

console.log(smallestIsland(grid))