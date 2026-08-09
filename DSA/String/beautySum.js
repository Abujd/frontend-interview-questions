var beautySum = function(s) {
    if(s.length <= 1)
        return 0;
    
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i;j < s.length; j++){
            current = s.substring(i,j + 1);
            let a =  getBeautySumPresent(current);
                sum += a;
            // console.log(a);

        }
    }

    return sum;

};

var getBeautySumPresent = function(s){
    let charMap = {};

    for(let i = 0 ; i < s.length; i++){
       charMap[s[i]] = (charMap[s[i]] || 0) + 1;
    }

    let values = Object.values(charMap);

    let max =  Math.max(...values);
    let min = Math.min(...values);

    return  max === 0 || min === 0 ? 0 : max-min;
}


let s ="aabcbaa";
console.log(beautySum(s));