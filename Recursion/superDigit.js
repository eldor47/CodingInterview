// super_digit(123) -> super_digit(1 + 2 + 3)
function superDigit(n, k) {
    if(n < 10) {
        return n
    }
    
    var total = 0
    for(var c of n) {
        total += parseInt(c)
    }
    
    return superDigit((total*k).toString(), 1)
}

console.log(superDigit('129038470917234907129034709127340971203947109374091723094871234', 100000))