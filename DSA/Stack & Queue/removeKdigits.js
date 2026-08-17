var removeKdigits = function (num, k) {
    let st = [], res = [];
    for (let i = 0; i < num.length; i++) {
        let curr = num[i];
        while (st.length > 0 && k > 0 && st[st.length - 1] > curr) {
            st.pop();
            k--;
        }

        st.push(num[i]);


    }
    while (st.length > 0 && k > 0) {
        st.pop();
        k--;
    }
    if (st.length === 0) return "0";

    while (st.length > 0) {
        res += st.pop();
    }

    res = res.replace(/0+$/, "");

    res = res.split("").reverse().join("");

    if (res.length === 0) return "0";

    return res;

};

let num = "112", k = 1;

console.log(removeKdigits(num, k));
