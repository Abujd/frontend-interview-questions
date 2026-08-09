// var longestCommonPrefix = function(strs) {
//     let shortedstWord = strs.reduce((a,b) => a.length <= b.length ? a : b);
//     var l = shortedstWord.length;
//     let subs = "";
//     for(let i = l;  i > 0 ; i--){
//         subs = shortedstWord.substring(0, i);
//         if(isPrefixPresent(strs, subs)){
//             return subs;
//         }
//     }
//     return "";
// };
// function isPrefixPresent(strts, sub){
//     return strts.every(s => s.startsWith(sub));
// }

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    const min = Math.min(first.length, last.length);
    let prefix = "";

    for(let i = 0; i< min ; i++){
        if(first[i] !==  last[i])
        {
            return prefix;
        }
        prefix += first[i];
    }

}

let num = strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));