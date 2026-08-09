let Obj = {
    firstName: "Abuj",
    LastName: "DS",
    printFullName: function (){
        console.log(this.firstName, this.LastName);
    },
    getArrow: () => {
        console.log(this.firstName, this.LastName);
    },

    getByArrow() {
        const arrow = () => {
            console.log(this.firstName, this.LastName);
        };
        arrow();
    }
    
}

Obj.printFullName(); // Abuj DS

Obj.getArrow();  // undefined undefined
// Arrow fun does not have thier own this, they capture from its lexical scope.

Obj.getByArrow(); ///Abuj DS


let Obj2 = {
    firstName: "Abuj 2",
    LastName: "DS 2"
}

const getArrow = () => {
    console.log(this.firstName, this.LastName);
}

function getByArrow(city, state) {
 console.log(this.firstName, this.LastName , "From ", city, state);
}

getArrow(Obj2) // undefined undefined

getByArrow(Obj2); // undefined undefined

// Hence call came in picture  we can call that method and pass the object 

getArrow.call(Obj2); // undefined undefined

getByArrow.call(Obj2 ,"Pune");  //Abuj 2 DS 2 From  undefined undefined
getByArrow.call(Obj2 ,"Pune", "MH"); //Abuj 2 DS 2 From  Pune


//Appply similar to call but we can pass arg in array

getByArrow.apply(Obj2 ,["Pune", "MH"]); //Abuj 2 DS 2 From  Pune MH


//Same as a call but create a New copy of function

getByArrow.bind(Obj2 ,["Pune", "MH"]); //Abuj 2 DS 2 From  Pune MH created a new copy

//bind() creates a copy of function whose this is permanently fixed to Obj2.

getByArrow.bind(Obj ,["Pune", "MH"]);





