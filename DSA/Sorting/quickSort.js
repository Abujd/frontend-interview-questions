function quickSort(nums, low, high){
  if(low<high){
    let pivotIndex = partition(nums, low, high);
    quickSort(nums, low, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, high);
return nums;
  }

}
function partition(nums, low, high){

    let p = nums[high];
    let i = low - 1;
    for(let j = low; j <high; j++){
        if(nums[j] <= p){
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;


}


let nums = [4, 9, 1, 7, 3, 10, 6, 2, 8, 5], n =10;
let ans = quickSort(nums, 0 , n-1);
console.log(...ans);
