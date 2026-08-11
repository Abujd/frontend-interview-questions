function mergeSort(nums, low, high){
    if(low >= high){
        return;
    }

    let mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid+1, high);
    merge(nums, low, mid, high);

    return nums;

}

function merge (nums, start, mid, end){
    let i = start, j  = mid + 1;
    let temp = [];

    while(i <= mid && j <= end) {
        if(nums[i] <= nums[j]){
            temp.push(nums[i]);
            i++;
        }else{
            temp.push(nums[j]);
            j++;
        }
    }

    while(i <= mid){
        temp.push(nums[i]);
        i++;
    }

    while(j <= end){
        temp.push(nums[j]);
        j++;
    }
    
    for (let k = 0; k < temp.length; k++) {
        nums[start + k] = temp[k];
    }
}

let nums = [4, 9, 1, 7, 3, 10, 6, 2, 8, 5], n =10;
let ans = mergeSort(nums, 0 , n-1);
console.log(...ans);
