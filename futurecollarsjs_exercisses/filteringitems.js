function filterItems(arg1, arg2) {
    const filterarg1 = arg1.filter(num => num > 0);
    const filterarg2 = arg2.filter(num => num > 0);

    return[filterarg1, filterarg2];
}

console.log(filterItems([1, -2, 3], [1, 0]));
console.log(filterItems([10, -10], [1, 2, 3]));
