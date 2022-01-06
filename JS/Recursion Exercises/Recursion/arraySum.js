const a = [1, 2, 3, 4, 5];
// const a = [1, 2, 3];

const sumArr = (arr, i) => {
    if (i >= arr.length) {
        return 0;
    }

    return arr[i] + sumArr(arr, i + 1);
};

let b = sumArr(a, 0);

console.log(b);

