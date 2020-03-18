function solve(rod, length) {
  let bestSolution = Array(length + 1).fill(-1);
  let path = [0];

  function retrivePath() {
    let res = [];
    while (length - path[length] !== 0) {
      res.push(path[length]);
      length -= path[length];
    }

    res.push(path[length]);
    return res;
  }

  function cutTheRode(length) {
    if (length === 0) {
      return 0;
    }

    if (bestSolution[length] !== -1) {
      return bestSolution[length];
    }

    let currentBest = 0;
    for (let i = 1; i <= length; i++) {
      currentBest = Math.max(currentBest, rod[i] + cutTheRode(length - i));
      if (bestSolution[length] < currentBest) {
        bestSolution[length] = currentBest;
        path[length] = i;
      }
    }

    return currentBest;
  }

  let result = cutTheRode(length);
  result += `\r\n${retrivePath().join(" ")}`;
  return result;
}

console.log(solve([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 8));

// 0 1 2
// 0 1 5

// 0 1 2 3 4
// 0 1 5 8 9

// 0 1 2 3 4 5  6  7  8  9  10
// 0 1 5 8 9 10 17 17 20 24 30

// 0 1 5 8 9 10 17 17 20 24 30
// 4    10 2 2
// 0 1 5 8 9 10 17 17 20 24 30
// 8	22 2 6
// 0 1 5 8 9 10 17 17 20 24 30
// 10	30 10
