console.log("hIii");

let obj = {
  firstName : "Ds",
  LastName : "Abuj"
}
function printFullName2(city, state, country) {
  console.log(this.firstName, this.LastName,city, state, country);
}

//polyfill of call - context meaning object u pass, args - fun params
//thisFunc - any fun name

Function.prototype.myCall = function(context, ...args){
  if(typeof this !== "function"){
    return new Error(this + "It is not callable");
  }
  context.thisFunc = this;
  context.thisFunc(...args);
  delete context.thisFunc 
}

const polly1 = printFullName2.myCall(obj,"Pune", "MH", "IN");
const polly = printFullName2.call(obj,"Pune", "MH", "IN");


//polyfill of apply

Function.prototype.myApply = function(context, args){

  if(typeof this !== "function"){
    return new Error(this + "It is not callable");
  }

  if(!Array.isArray(args)){
    throw new Error("Error not an array");
  }
  context.thisFunc = this;
  context.thisFunc(...args);
  delete context.thisFunc;
}

const apply1 = printFullName2.myApply(obj,["Pune", "MH", "IN"]);
const apply2 = printFullName2.apply(obj,["Pune", "MH", "IN"]);


// polyfill of bind

Function.prototype.myBind = function(context, ...args) {
  let obj = this;
  return function(...args2){
    obj.apply(context, [...args, ...args2]);
  }
}


const print1 = printFullName2.myBind(obj,"Pune", "MH");
print1("India");
const print2 = printFullName2.bind(obj,"Pune", "MH");
print2("India");