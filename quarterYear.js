// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (mon) => {
    if (mon < 4) {
        return 1
    } else if (mon > 3 && mon < 7) {
        return 2
    } else if (mon > 6 && mon < 10) {
        return 3
    } else {
        return 4
    }
};

console.log(quarterOf(10));
