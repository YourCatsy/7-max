'use strict';

console.log(maxCycle([8]), 'one element test, must return 8');
console.log(maxCycle([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(maxCycle([8, 17]), '2 elements test, must return 17');

console.log(maxRecursion([8]), 'one element test, must return 8');
console.log(maxRecursion([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(maxRecursion([8, 17]), '2 elements test, must return 17');

function maxCycle(arr) {
    let max = arr[0];
    for (let element of arr) {
        if (element > max) {
            max = element;
        }
    }

    return max;
}

function maxRecursion(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    if (arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    return maxRecursion(arr.slice(1));
}