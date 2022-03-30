var map = new Map()
var a = [1,2,3,4,1,2,3]
var find;

for (var num of a) {
    if(map.get(num)){
        map.set(num, map.get(num)+1)
    } else {
        map.set(num, 1)
    }
}

for (const [key, value] of map.entries()) {
    if(value === 1) {
        find = key
        break;
    }
}

console.log(find)



/// Counting sort
function countingSort(arr) {
    // Write your code here
    let counterArray = Array(100).fill(0);
    
    for (let number of arr) {
        counterArray[number]++
    }
    return counterArray;
}
