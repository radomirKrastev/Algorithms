const n = 2;
const k = 3;
const result = Array(k).fill(0);

const arr = Array(n + 1);

for (let i = 0; i <= n; i++) {
  arr[i] = i;
}

function variate(index) {
  if (index >= result.length) {
    console.log(result.join(", "));
  } else {
    for (let i = 0; i < arr.length; i++) {
      result[index] = arr[i];
      variate(index + 1);
    }
  }
}

variate(0);
