/*
 Brute force
 - Slice and concat  will create image of rotated
 - s.substring(i) + s.substring(0, i);  
 meaning it will extract string from i and appened rest

 ex rotate ( i = 1)
 otate + r
 otater ( rotate by 1)




 optimal

 Just double the string 
 check if goal includes in it
*/


var rotateString = function(s, goal) {

    if(s.length !== goal.length )
        return false;

    var doubleS =  s + s;
    return s.includes(goal);

    // for (let i = 0; i < s.length; i++) {
    //     let rotated = s.substring(i) + s.substring(0, i);  
    //     if (rotated === goal) {
    //         return true;  
    //     }
    // }

    return false;
    
};

var s = "dawhwh", goal = "hdawhw";
console.log(rotateString(s, goal));


