var nextGreaterElementBRT = function (nums) {
    let st = [], ans = [];
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        ans[i] = -1;

        for (let j = 1; j < nums.length; j++) {
            let idx = (j + i) % nums.length;
            if (nums[idx] > curr) {
                ans[i] = nums[idx];
                break;
            }
        }
    }
    return ans;
}
var nextGreaterElement = function (nums) {
    let st = [], ans = [];
    let n = nums.length;
    for (let i = 2 * n - 1; i >= 0; i--) {
        let idx = i % n;
        curr = nums[idx];

        while (st.length > 0 && st[st.length - 1] <= curr) {
            st.pop();
        }

        if (i < n) {
            if (st.length === 0) ans[i] = -1;
            else ans[i] = st[st.length - 1];

        }
        st.push(curr);

    }
    return ans;
}

let nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElement(nums));
