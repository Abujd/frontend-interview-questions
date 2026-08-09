/* 
Curring is the method where it takes a one argument and return function expecting secong argument.


use 
High order funcion
to avoid passing args repetdly

*/


// function sum(a) {
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(5)(6)(1));
 //--------------------2 --------------------
function evaluate(op) {
    return function(a){
        return function(b){
            if(op === "sum") return a + b;
            else if(op === "multiply") return a * b
            else return "Invalid op";
        }
    }
    

}

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));


 //-------------------- 3 Infinite currying -------------------- sum(1)(2)(3) ...... (n)


//recursive solution
const sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}


 console.log(sum(6)(4)(2)(6));



 //-------------------- Dom manipulation using Curry --------------------