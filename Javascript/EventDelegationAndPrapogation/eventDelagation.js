document.querySelector("#catagory").addEventListener("click", (e) => {
    console.log("child clicked!!", e);
    e.preventDefault();
    if(e.target.nodeName  === "LI"){
        window.location.href = "/" + e.target.id;
    }
} , true);

