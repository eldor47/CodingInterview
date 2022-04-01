function isBalanced(s) {
    if (s.length % 2 != 0)
        return 'NO'

    var stack = []
    var closing = ['}', ']', ')']
    var pairs = {'}':'{', ']':'[', ')':'('}

    for(var bracket of s) {
        if (closing.includes(bracket)) {
            if(stack.length == 0 || stack.pop() != pairs[bracket])
                return 'NO'
        } else
            stack.push(bracket)
    }

    return stack.length == 0 ? 'YES' : 'NO'
}

console.log(isBalanced('({}[])'))