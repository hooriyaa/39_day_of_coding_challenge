// QUESTION 115:
function logDayOfWeek(Daynum) {
    switch (Daynum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 2:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("invalid day number log correct day number!!!");
            break;
    }
}
logDayOfWeek(4);
logDayOfWeek(2);
logDayOfWeek(6);
// QUESTION 116:
function seasons(months) {
    switch (months) {
        case 12:
        case 1:
        case 2:
            console.log("Winter.");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring.");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer.");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn.");
        default:
            console.log("Invalid Month!!");
            break;
    }
}
seasons(5);
seasons(3);
seasons(7);
// QUESTION 117:
function logproduct(products) {
    switch (products) {
        case "book":
            console.log("30% discount");
            break;
        case "T_shirt":
            console.log("40% discount");
            break;
        default:
            console.log("Invalid product!!");
            break;
    }
}
logproduct("baskets");
logproduct("book");
export {};
