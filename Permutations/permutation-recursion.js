const arr = [1, 2, 3, 4, 5, 6];
const permutaionArr = Array(arr.length);
const used = Array(arr.length).fill(false);

function permute(index) {
  if (index >= arr.length) {
    console.log(permutaionArr.join(", "));
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        permutaionArr[index] = arr[i];
        permute(index + 1);
        used[i] = false;
      }
    }
  }
}

permute(0);
