var removeOuterParentheses = function(s) {
    let level = 0; 
    var res = "";

    for(char of s){
        if(char === "("){

            if(level >  0) res += char;
            level++;

        }else if(char === ")"){
            level --;
            if(level >  0) res += char;
        }
    }
    return res;

};
var s = "(()())(())" ;
console.log(removeOuterParentheses(s))