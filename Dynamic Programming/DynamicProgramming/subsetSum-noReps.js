function solve(numbers, target) {
  let allSums = new Map();
  allSums.set(0, 0);
  let targetFound = false;

  for (let i = 0; i < numbers.length; i++) {
    let subSums = new Map();

    for (let sum of allSums.keys()) {
      let newSum = sum + numbers[i];

      if (!subSums.has(newSum)) {
        subSums.set(newSum, numbers[i]);
      }
    }

    allSums = new Map([...allSums].concat([...subSums]));

    if (allSums.has(target)) {
      targetFound = true;
      break;
    }
  }

  let subSums = [];
  if (targetFound) {
    let current = target;

    while (current !== 0) {
      let added = allSums.get(current);
      subSums.unshift(added);
      current -= added;
    }
  }

  console.log(`${target} = ${subSums.join(" + ")}`);
}

solve([3, 5, 1, -4], 7);
