const n = 5;
const k = 3;

let arr = new Array(k);
arr.fill(0);

while (true) {
    let index = k - 1;
    console.log(arr);

    while (index >= 0 && arr[index] == n - 1) {
        index--;
    }

    if (index < 0) {
        break;
    }

    arr[index]++;

    for (let i = index + 1; i < k; i++) {
        arr[i] = 0;
    }
};
