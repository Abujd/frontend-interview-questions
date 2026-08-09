document.querySelector("#grandparent").addEventListener("click", (e) => {
    console.log("Grand parent clicked!!");
    e.stopPropagation();
} , true);


document.querySelector("#parent").addEventListener("click", () => {
    console.log("parent clicked!!");
} , true);
document.querySelector("#child").addEventListener("click", () => {
    console.log("child clicked!!");
} , true);