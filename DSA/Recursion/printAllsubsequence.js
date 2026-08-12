function printAllSubsequence(index, arr, current, res) {
    if (index === arr.length) {
        console.log([...current]);
        res.push([...current]);
        return;
    }


    // Take arr[index]
    current.push(arr[index]);
    printAllSubsequence(index + 1, arr, current, res);
    current.pop();
        // Don't take arr[index]

    printAllSubsequence(index + 1, arr, current, res);

}

let arr = [3,1,2];
let res = [];

printAllSubsequence(0, arr, [], res);

