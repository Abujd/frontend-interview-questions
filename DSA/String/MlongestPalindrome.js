var longestPalindrome = function(s) {

    if(s.length === 1)
        return s;
    
    let current = "", longest = "";
    for(let i = 0; i < s.length; i++){
        for(let j = i;j < s.length; j++){
            current = s.substring(i,j + 1);
            if(isPalindrome(current) && longest.length < current.length ){
                longest = current; 
               
            }

        }
    }

    return longest;
};

var isPalindrome = function (s1){

    return s1 === s1.split("").reverse().join("");

}
let s ="cbbd";
console.log(longestPalindrome(s));