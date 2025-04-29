function filterItems(array1, array2) {
    const filterredArray1 = array1.filter(num => num > 0);
    const filterredArray2 = array2.filter(num => num > 0);
    return [...filterredArray1, ...filterredArray2];
}

console.log(filterItems([1, -2, 3], [1, 0]));
