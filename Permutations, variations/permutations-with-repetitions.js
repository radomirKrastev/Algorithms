const arr = [5, 5, 5, 1, 2].sort((a, b) => a - b);

function swap(a, b) {
  let current = arr[a];
  arr[a] = arr[b];
  arr[b] = current;
}

function permute(start, end) {
  console.log(arr.join(", "));

  for (let l = end - 2; l >= start; l--) {
    for (let r = l + 1; r < arr.length; r++) {
      if (arr[l] !== arr[r]) {
        swap(l, r);
        permute(l + 1, end);
      }
    }

    let firstElement = arr[l];
    for (let i = l; i <= end - 2; i++) {
      arr[i] = arr[i + 1];
    }

    arr[end - 1] = firstElement;
  }
}

permute(0, arr.length);
