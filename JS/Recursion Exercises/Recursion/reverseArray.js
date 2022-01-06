const input = [1, 2, 3, 4, 5, 6];

const reverse = (arr, reversedArr, i) => {
    if (i >= arr.length) {
        return;
    }

    reversedArr[reversedArr.length - 1 - i] = arr[i];

    reverse(arr, reversedArr, ++i);
    return reversedArr;
};

console.log(reverse(input, new Array(input.length), 0));