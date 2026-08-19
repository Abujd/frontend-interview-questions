
var findContentChildren = function (student, cookie) {
    student.sort((a, b) => a - b);
    cookie.sort((a, b) => a - b);

    let studentIndex = 0;
    let cookieIndex = 0;

    while (studentIndex < student.length && cookieIndex < cookie.length) {
        if (cookie[cookieIndex] >= student[studentIndex]) {
            studentIndex++;
        }
        cookieIndex++;
    }

    return studentIndex;

};
var g = [10, 9, 8, 7], s = [5, 6, 7, 8];
console.log(findContentChildren(g, s));

