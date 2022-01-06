const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function interpolationSearch(arr, startPoint, endPoint, num) {
    let divideIndex;

    if (startPoint <= endPoint && num >= arr[startPoint] && num <= arr[endPoint]) {

        divideIndex = startPoint + Math.floor(((endPoint - startPoint) / (arr[endPoint] - arr[startPoint])) * (num - arr[startPoint]));;

        if (arr[divideIndex] == num) {
            return divideIndex;
        }

        if (arr[divideIndex] < num) {
            return interpolationSearch(arr, divideIndex + 1, endPoint, num);
        }

        if (arr[divideIndex] > num) {
            return interpolationSearch(arr, startPoint, divideIndex - 1, num);
        }
    }
    return -1;
}

console.log(interpolationSearch(arr, 0, arr.length - 1, 1));