function power(x,n){
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return x;
    }

    if(n % 2 === 0)
        return power((x * x), Math.floor(n/2));

    return  x * power(x, n - 1);
}

var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, -n);
    }

    return power(x, n);
};


console.log(myPow(2, -10));claud