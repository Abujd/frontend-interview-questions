
var frequencySort = function(s) {
    let charArr = Array(256).fill(0), freqArr = [];
    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i)]++;
    }

      for(let i = 0; i < charArr.length; i++){
        if(charArr[i] > 0){
           freqArr.push({
            char: String.fromCharCode(i),
            freq : charArr[i]
           })
        }
        

    }

    freqArr.sort((a,b) => b.freq - a.freq);

    let res = "";
    for (let item of freqArr) {
        res += item.char.repeat(item.freq);
    }

    return res;


};

var s = "tree";
console.log(frequencySort(s));

