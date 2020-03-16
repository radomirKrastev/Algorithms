const n = 2;
const k = 3;
const arr = Array(k).fill(0);

function solve() {
  while (true) {
    console.log(arr.join(", "));
    let index = k - 1;

    while (index >= 0 && arr[index] == n) {
      index--;
    }

    if (index < 0) {
      break;
    }

    arr[index]++;
    for (let i = index + 1; i < k; i++) {
      arr[i] = 0;
    }
  }
}

solve();
