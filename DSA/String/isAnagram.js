var isAnagram = function(s, t) {
    if(s.length !== t.length )
        return false;
    let counterMap =  Array(26).fill(0);

    for(const char of s){
        counterMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(const char of t){
        let x = counterMap[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        if( x === 0){
            return false;
        }
        counterMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    return true;
    
};

var s = "aacc", t = "ccac" ;
console.log(isAnagram(s, t));