// array of 26 -> 1 t0 26 ( charCodeAt() returns the numeric Unicode/UTF-16 code of a character. )
//console.log('a'.charCodeAt(0)); // 97
//'c'.charCodeAt(0)); // 99
// we want to store A - 0 , B - 1 like this ( charcode of B - charcode of A) - will give u 1




var countsubstring = function(s) {
let c = 0;
    for(let i = 0 ; i < s.length; i++){
        let distinctCharMap = {};
        for(let j = i ;  j < s.length; j++){
            distinctCharMap[s[j].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
            if(distinctCharMap[0] + distinctCharMap[1] + distinctCharMap[2] === 3)
                c++;
        }
    }
    return c;

}
let s ="bbacba";
console.log(countsubstring(s));