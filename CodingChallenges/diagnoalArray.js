var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]


function diagonalDifference(arr) {
    let leftSum = 0
    let rightSum = 0
    for(var i = 0; i < arr.length; i++) {
        var j = i
        var j2 = arr.length - (i+1)
        leftSum += arr[i][j]
        rightSum += arr[i][j2]
    }
    return Math.abs(rightSum-leftSum)
}

diagonalDifference(arr)