var maxNumberOfFamilies = function (n, reservedSeats) {
    let groups = 0, index = 0;

    let map = new Map();

    for (let [row, i] of reservedSeats) {
        if (!map.has(row)) {
            map.set(row, new Set());
        }

        map.get(row).add(i);
    }
    groups = 2 * n;
    for (let [row, reserved] of map) {

        let left = true, right = true, middle = true, count = 0;

        for (let i = 2; i <= 5; i++) {
            if (reserved.has(i)) {
                left = false
                break;
            };
        }

        for (let i = 4; i <= 7; i++) {
            if (reserved.has(i)) {
                middle = false
                break;
            };
        }
        for (let i = 6; i <= 9; i++) {
            if (reserved.has(i)) {
                right = false;
                break;
            }
        }
        if (left && right) {
            count += 2;
        }
        else if (left || right || middle) {
            count += 1;
        }
        groups += count - 2;

    }

    return groups;
};

let n = 3, reservedSeats = [[1, 2], [1, 3], [1, 8], [3, 1], [3, 10]];

console.log(maxNumberOfFamilies(n, reservedSeats));
