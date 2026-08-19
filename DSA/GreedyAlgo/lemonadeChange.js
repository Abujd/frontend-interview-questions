var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;

    for (let bill of bills) {
        if (bill === 5) {
            five++;
        }
        else if (bill === 10) {
            if (five === 0) return false;

            five--;
            ten++;
        }
        else { // bill === 20
            if (five > 0 && ten > 0) {
                // Give 1 ten + 1 five
                ten--;
                five--;
            }
            else if (five >= 3) {
                // Give 3 fives
                five -= 3;
            }
            else {
                return false;
            }
        }
    }

    return true;
};

var bills = [5, 5, 10, 20];
console.log(lemonadeChange(bills));
