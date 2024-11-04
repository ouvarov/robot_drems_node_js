const arr = [1, 2, 3, 4, 5, 6];

const recursiveIteration = (array, index = 0) => {
    if (index < array.length) {
        console.log(array[index]);
        recursiveIteration(array, index + 1);
    }
}

recursiveIteration(arr);
