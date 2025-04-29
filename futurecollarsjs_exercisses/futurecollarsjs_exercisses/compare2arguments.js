function compare(num1, num2) {
    arg1 =1;
    arg2 =-1;
    if (num1 > num2) {
        return [arg1];
    }
    else if (num1 < num2) {
        return [arg2];
    }
    else {
        return 0;
    }
}

console.log(compare(6, 5));
console.log(compare(1, 2));
console.log(compare(7, 7));