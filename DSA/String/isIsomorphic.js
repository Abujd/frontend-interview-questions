/*
    two strings are isomorphic if characters in one string can be replaced to get the other string, while maintaining the same pattern.
*/

var isIsomorphic = function(s, t) {


    let m1 = Array(256).fill(0), m2 = Array(256).fill(0);
    let n = s.length;

    for (let i = 0; i < n; ++i) {
        if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]) return false;

        m1[s.charCodeAt(i)] = i + 1;
        m2[t.charCodeAt(i)] = i + 1;


    }
    
    return true;

//     var sLen = s.length, sLenMap = {}; 
//     var tLen = t.length, tLenMap = {};

//     if(sLen !== tLen)
//         return false;

//     for(char of s){
//         sLenMap[char] = (sLenMap[char] || 0) + 1;
//     }

//     for(char of t){
//         tLenMap[char] = (tLenMap[char] || 0) + 1;
//     }

//    return Object.values(sLenMap).join("") === Object.values(tLenMap).join("");
   
};



var s = "bbbaaaba", t = "aaabbbba";
console.log(isIsomorphic(s, t));
