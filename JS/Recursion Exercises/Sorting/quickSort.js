let arrayToSort = [6, 1, 4, 3, 5, 7, 9, 2, 8, 0];

const sortArray = (arr, pivotIndex, leftCollection, rightCollection) => {
    const pivotElement = arr[pivotIndex];

    for (let i = 0; i < leftCollection.length; i++) {
        arr[i] = leftCollection[i];        
    }

    arr[leftCollection.length] = pivotElement;
    
    for (let i = 0; i < rightCollection.length; i++) {
        arr[leftCollection.length + 1 + i] = rightCollection[i];        
    }

    return arr;
};

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return;
    }
    
    const pivotPoint = arr.length % 2 == 0 ? Math.floor(arr.length / 2 - 1) : Math.floor(arr.length / 2);

    let leftCollection = [];
    let rightCollection = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == pivotPoint) {
            continue;
        }

        if (arr[i] < arr[pivotPoint]) {
            leftCollection.push(arr[i]);
        } else {
            rightCollection.push(arr[i]);
        }
    }

    if(leftCollection.length) {
        quickSort(leftCollection);
    }
    
    if(rightCollection.length) {
        quickSort(rightCollection);
    }

    let sortedArray = sortArray(arr, pivotPoint, leftCollection, rightCollection);
    return sortedArray;
};

quickSort(arrayToSort);
