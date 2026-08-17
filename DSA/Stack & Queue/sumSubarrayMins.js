var sumSubarrayMinsBT = function (arr) {
    let sum = 0;
    let mod = 1e9 + 7;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min = arr[i];
        for (let j = i; j < n; j++) {
            min = Math.min(min, arr[j]);
            sum = (sum + min) % mod;
        }
    }
    return sum;
};

var sumSubarrayMins = function (arr) {
    let contributions = 0;
    const n = arr.length;
    let sum = 0
    let mod = 1e9 + 7;
    const nse = findNSE(arr);
    const psee = findPSEE(arr);
    for (let i = 0; i < n; i++) {
        const left = i - psee[i];
        const rigth = nse[i] - i;

        const freq = left * rigth * 1;
        const val = (freq * arr[i]) % mod;
        sum = (sum + val) % mod;

    }
    return sum;


}


function findNSE(arr) {

    const n = arr.length;

    const ans = [];
    const st = [];
    for (let i = n - 1; i >= 0; i--) {
        const currEle = arr[i];
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }
        ans[i] = st.length > 0 ? st[st.length - 1] : n;
        st.push(i);
    }
    return ans;
}

function findPSEE(arr) {
    const n = arr.length;
    const ans = [];
    // Stack 
    const st = [];
    for (let i = 0; i < n; i++) {
        const currEle = arr[i];

        while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }

        ans[i] = st.length > 0 ? st[st.length - 1] : -1;

        st.push(i);
    }
    return ans;
}


let arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));
