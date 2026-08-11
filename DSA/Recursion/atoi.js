var myAtoi = function(s) {
        let i = 0;
    while(i < s.length && s[i] === ' ') i++;
    let sign = 1;
    while(i < s.length && (s[i] ===  '+' || s[i] === "-" )){
        sign = s[i] === "-" ? -1 : 1;
         i++;

    }
    return helper(s, i, 0, sign);
    
}

var myAtoiUsingLoop = function(s) {
    
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    let i = 0, sign = 1;
    let num = 0;
    while(s.length >= i && s[i] === " ") i++;

    while(s.length >= i && (s[i] === "-" || s[i] === "+")){
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    
        num = num * 10 + Number(s[i]);

        if(sign* num <= INT_MIN) return INT_MIN;
        if(sign * num >= INT_MAX) return INT_MAX;

        i++;

    }
    return num * sign;

}

var helper = function (s, i, num, sign){

    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if(s.length >= i && isNaN(Number(s[i])))
        return sign * num;

    num = num * 10 + Number(s[i]);

    if (sign * num <= INT_MIN) return INT_MIN;
    if (sign * num >= INT_MAX) return INT_MAX;

    return  helper(s, i + 1, num, sign);


    
}
console.log(myAtoiUsingLoop("   -1337c0d4"));