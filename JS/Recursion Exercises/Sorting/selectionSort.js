let arr = [2, 3, 4, 7, 1, 9, 2, 9, 3];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let elementFound = arr[i];
        let currentElementIndex = i;
        for (let y = i + 1; y < arr.length; y++) {
            let currentElement = arr[y];

            if (isBigger(elementFound, currentElement)) {
                elementFound = currentElement;
                currentElementIndex = y;
            }
        }
        
        arr[currentElementIndex] = arr[i];
        arr[i] = elementFound;
    }
};

const isBigger = (a, b) => a > b;

console.log(arr)
selectionSort(arr);
console.log(arr)
