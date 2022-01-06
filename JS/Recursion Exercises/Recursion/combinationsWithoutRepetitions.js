let n = 4;
let k = 3;

let arr = new Array(n);
let combs = new Array(k);

for (let x = 0; x < n; x++) {
    arr[x] = x + 1;
}

const combine = (arr, combs, index, border) => {
    if (index >= combs.length) {
        console.log(combs.join(' '));
        return;
    }

    for (let i = border + 1; i < arr.length; i++) {
        combs[index] = arr[i];
        combine(arr, combs, index + 1, i);
    }
};

combine(arr, combs, 0, -1);
