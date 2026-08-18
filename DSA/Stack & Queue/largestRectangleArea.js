
var largestRectangleArea = function (heights) {
    const n = heights.length;
    const leftsmall = new Array(n);
    const rightsmall = new Array(n);
    const stack = [];

    //Next Smallest on left

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i])
            stack.pop();

        leftsmall[i] = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
        stack.push(i);
    }

    //Next Smallest of right

    stack.length = 0;
    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i])
            stack.pop();

        rightsmall[i] = stack.length === 0 ? n - 1 : stack[stack.length - 1] - 1;
        stack.push(i);
    }


    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = rightsmall[i] - leftsmall[i] + 1;
        maxArea = Math.max(maxArea, width * heights[i]);
    }

    return maxArea;

};
let heights = [0, 9];
console.log(largestRectangleArea(heights));
