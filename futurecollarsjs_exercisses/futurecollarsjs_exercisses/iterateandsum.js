function iterateAndSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

console.log(iterateAndSum([1, 2, 3]));
console.log(iterateAndSum([10, 10, 10, 10]));