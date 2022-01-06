const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getDivideIndex = (startPoint, endPoint) => {
    const diff = endPoint - startPoint + 1;
    const increase = diff % 2 == 0 ? Math.floor(diff / 2 - 1) : Math.floor(diff / 2);
    return startPoint + increase;
};
    
const binarySearch = (arr, startPoint, endPoint, num) => {
    if (startPoint == endPoint) {
        return arr[startPoint] == num ? startPoint : -1;
    }

    const divideIndex = getDivideIndex(startPoint, endPoint);

    if (arr[divideIndex] == num) {
        return divideIndex;
    } else if (arr[divideIndex] > num) {
        return binarySearch(arr, startPoint, divideIndex, num);
    } else {
        return binarySearch(arr, divideIndex + 1, endPoint, num);
    }
};

console.log(binarySearch(arr, 0, arr.length - 1, 4));