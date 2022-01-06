let array = [334, 570, 105, 763, 137, 749, 724, 464];
// let array = [6, 10, 7, 5, 2, 4, 9, 8, 3];

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];

        for (let y = i - 1; y >= 0; y--) {
            if (currentElement < arr[y]) {
                arr[y + 1]=arr[y];
                arr[y]=currentElement;
            }
        }
    }
};

console.log(array);
insertionSort(array);
console.log(array);