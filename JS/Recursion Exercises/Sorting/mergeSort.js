// let arrayToSort = [38, 27, 43, 3, 9, 82, 10];
let arrayToSort = [13, 5, 9, 6, 45, 6, 8, 43, 6, 6, 9];

const mergeArrays = (arr1, arr2, mergeArray) => {
    let index1 = 0;
    let index2 = 0;

    for (let i = 0; i < mergeArray.length; i++) {
        if ((index1 > arr1.length - 1) && (index2 <= arr2.length - 1)) {
            mergeArray[i] = arr2[index2++];
        } else if ((index2 > arr2.length - 1) && (index1 <= arr1.length - 1)) {
            mergeArray[i] = arr1[index1++];
        } else {
            if (arr1[index1] < arr2[index2]) {
                mergeArray[i] = arr1[index1++];
            } else {
                mergeArray[i] = arr2[index2++];
            }
        }
    }

    return mergeArray;
};

let isFirst = true;

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        console.log('end');
        return null;
    }

    const divideIndex = Math.floor(arr.length / 2) - 1;
    const subArr1 = arr.slice(0, divideIndex + 1);
    const subArr2 = arr.slice(divideIndex + 1, arr.length);
    console.log(1, subArr1, subArr2)
    
    mergeSort(subArr1);

    mergeSort(subArr2);

    return mergeArrays(subArr1, subArr2, arr);
};

let sortedArray = mergeSort(arrayToSort);
console.log(sortedArray)

