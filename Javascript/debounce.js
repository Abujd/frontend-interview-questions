//Debounce in 

function fetchData(...args) {
    console.log("fetching data", args);
}


function debounce(fn, delay) {
    let timer; 
    return function (...args){
        if(timer) clearInterval(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const debounceApiCall = debounce(fetchData, 500);

const searchInput = document.getElementById("search");

searchInput.onkeydown = (e) => {
    const query = e.target.value;
    debounceApiCall(query);
}
