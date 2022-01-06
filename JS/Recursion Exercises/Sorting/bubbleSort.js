let array = [6, 10, 7, 5, 2, 4, 9, 8, 3];
// let array = [334, 570, 105, 763, 137, 749, 724, 464];

const bubbleSort = (arr) => {
    isArraySorted = false;
    let rounds = 0;
    
    while (!isArraySorted) {
        isArraySorted = true;
        for (let i = 0; i < array.length - 1 - rounds; i++) {
            if (arr[i] > arr[i + 1]) {
                isArraySorted = false;

                const left = arr[i];
                const right = arr[i + 1];
                arr[i] = right;
                arr[i + 1] = left;
            }
        }

        rounds++;
    }
};

console.log(array);
bubbleSort(array);
console.log(array);