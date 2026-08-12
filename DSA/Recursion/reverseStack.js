function insert(stack, temp) {
    if (stack.length === 0) {
        stack.push(temp);
        return;
    }
    let val = stack.pop();
    insert(stack, temp);

    stack.push(val);

}


function sortStack(stack) {
    if (stack.length > 0) {
        let temp = stack.pop();
        sortStack(stack);
        insert(stack, temp);


    }
}


// Main function
let stack = [4, 1, 3, 2];
sortStack(stack);

// Print the sorted stack
console.log("Sorted stack (descending order):", stack);
