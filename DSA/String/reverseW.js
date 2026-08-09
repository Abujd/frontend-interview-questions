var reverseWords = function(s) {

    let a = s.trim().split(/\s+/).reverse().join(" ");
    console.log(a)
    
};

var s = "a good   example" ;
console.log(reverseWords(s))