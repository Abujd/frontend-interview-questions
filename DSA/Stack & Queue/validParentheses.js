var isValid = function (s) {
    let st = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            st.push(char);
        } else {
            if (st.length === 0) return false;


            let popped = st.pop();

            if (char === ')' && popped === '(' ||
                char === ']' && popped === '[' ||
                char === '}' && popped === '{'
            ) {
                continue;
            } else {
                return false;
            }
        }


    }
    return st.length === 0;
};
const s = "()[]{}";
console.log(isValid(s));
