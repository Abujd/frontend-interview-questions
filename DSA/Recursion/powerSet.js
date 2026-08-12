var powerSet = function(s, curr, res){
    if(curr.length !== 0){
        res.push(curr);
    }
}
var s = "abc", res= [];
let temp = "";
   for(let i = 0; i < s.length; i++){
    temp = '';
       for(let j = i; j <= i; j++){
         temp = temp + s[j];
       }
       res.push(temp);
    }
// powerSet(str,"", res);
console.log(res);
