var decodeString = function(s) {
    let stack = []
    let num = ""
    let str = ""

    for(let i = 0; i < s.length; i++) {
        if(+s[i] > -1) {
            num += s[i]
        } else if(s[i] === "[") {
            if(str.length) stack.push(str)
            if(num.length) stack.push(+num)
            str = ""
            num = ""
        } else if(s[i] === "]") {
            if(str.length) stack.push(str)
            str = ""
            while(true) {
                if(typeof stack.at(-1) === "string" && typeof stack.at(-2) === "string") {
                    let s1 = stack.pop()
                    let s2 = stack.pop()
                    stack.push(s2 + s1)
                } else if(typeof stack.at(-1) === "string" && typeof stack.at(-2) === "number") {
                    let s = stack.pop()
                    let n = stack.pop()
                    stack.push(s.repeat(n))
                    break
                }
            }
        } else {
            str += s[i]
        }

        if(i === s.length - 1 && str.length) stack.push(str)
    }

    return stack.join("")
};