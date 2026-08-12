
let MOD  = 10 ** 9 + 7;

var countGoodNumbers = function(index) {
    
    if(index === n){
        return 1;
    }
    if(index % 2 === 0){
        return (5 * countGoodNumbers(index+1, n)) % MOD;
    }else{
        return (4 * countGoodNumbers(index +1 , n)) % MOD;
    }

}

console.log(countGoodNumbers(0, 1));
