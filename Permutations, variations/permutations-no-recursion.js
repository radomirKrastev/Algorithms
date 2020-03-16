const arr = [1, 2, 3];

function permute(index) {
  if (index >= arr.length) {
    console.log(arr.join(", "));
  } else {
    permute(index + 1);
    for (let i = index + 1; i < arr.length; i++) {
      swap(i, index);
      permute(index + 1);
      swap(i, index);
    }
  }
}

function swap(a, b) {
  let current = arr[a];
  arr[a] = arr[b];
  arr[b] = current;
}

permute(0);
