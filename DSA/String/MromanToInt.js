/* 
Rule
1. Map
2. IV if large value comes after small the 
large - small

V - I -> 4
MCMXCIV - 1994

M - 1000
1000 + 1000 - 


Res = 1000
*/

var romanToInt = function(s) {
    var res= 0;
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
        res -= romanMap[s[i]];
    } else {
        res += romanMap[s[i]];
    }

    
    return res;

};

var s = "MCMXCIV";
console.log(romanToInt(s));