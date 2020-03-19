function solve(arr, target) {
  let possibleSums = Array(target + 1).fill(false);
  possibleSums[0] = true;

  for (let i = 0; i < possibleSums.length; i++) {
    if (possibleSums[i]) {
      for (let j = 0; j < arr.length; j++) {
        newSum = i + arr[j];
        if (newSum <= target) {
          possibleSums[newSum] = true;
        }
      }
    }
  }

  function getResult(target) {
    let result = [];
    while (target > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (possibleSums[target - arr[i]]) {
          result.push(arr[i]);
          target -= arr[i];
        }
      }
    }

    return result;
  }

  let result = "";
  if (possibleSums[target]) {
    result = getResult(target).join(" ");
  }

  console.log(possibleSums[target]);
  console.log(result);
}

solve([3, 5, 2], 17);
