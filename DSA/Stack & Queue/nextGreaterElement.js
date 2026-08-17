var nextGreaterElementBRT = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let greater = -1;

        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {

                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums1[i]) {
                        greater = nums2[k];
                        break;
                    }
                }

                break;
            }
        }
        ans.push(greater);
    }
    return ans;
};

var nextGreaterElement = function (nums1, nums2) {

    let map = new Map();
    let curr = 0;
    let st = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        curr = nums2[i];

        while (st.length > 0 && st[st.length - 1] <= curr) {
            st.pop();
        }

        map.set(curr, st.length > 0 ? st[st.length - 1] : -1);
        st.push(curr);
    }
    let ans = [];
    for (let num of nums1) {
        ans.push(map.get(num));
    }
    return ans;
}

let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

