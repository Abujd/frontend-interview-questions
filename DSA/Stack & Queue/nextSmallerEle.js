var nextSmallerElement = function (nums) {
    let st = [];
    let ans = [];


    for (let i = nums.length - 1; i >= 0; i--) {
        curr = nums[i];
        while (st.length > 0 && st[st.length - 1] >= curr) {
            st.pop();
        }

        ans[i] = st.length > 0 ? st[st.length - 1] : -1;
        st.push(curr);
    }

    return ans;
}

let nums = [10, 9, 8, 7];
console.log(nextSmallerElement(nums));
