

// Cache variable helps lower amount of runs
var cache = []

function stepPerms(n) {
    // Write your code here
    if(n < 0)
        return 0
    if(n == 1)
        return 1
    if(n == 2)
        return 2
    if(n == 3) 
        return 4
    if(!cache[n])
        cache[n] = stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3)
    
    return cache[n]
}


console.log(stepPerms(8))