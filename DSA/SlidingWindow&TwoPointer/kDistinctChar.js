function kDistinctChar(s, k) {
    let left = 0, right = 0, ans = 0;
    let charMap = {};

    for (right = 0; right < s.length; right++) {
        if (k === 0 || s.length === 0) return 0;
        const char = s[right];
        charMap[char] = charMap[char] === undefined ? 1 : charMap[char] + 1;

        while (Object.entries(charMap).length > k) {
            const leftChar = s[left];
            charMap[leftChar] = charMap[leftChar] - 1;
            if (charMap[leftChar] === 0) {
                delete charMap[leftChar];
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}

var s = "abcddefg", k = 3;

console.log(kDistinctChar(s, k));
