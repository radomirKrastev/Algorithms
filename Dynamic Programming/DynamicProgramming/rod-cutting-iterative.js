function solve(rod, length) {
  let bestPrice = Array(length + 1).fill(0);
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

  function cutTheRod() {
    for (let i = 1; i <= length; i++) {
      let currentBest = bestPrice[i];
      for (let j = 1; j <= i; j++) {
        currentBest = Math.max(rod[i], rod[j] + rod[i - j]);

        if (currentBest >= bestPrice[i]) {
          bestPrice[i] = currentBest;
          path[i] = j;
        }
      }
    }

    return bestPrice[length];
  }

  let result = cutTheRod();
  result += `\r\n${retrivePath()
    .reverse()
    .join(" ")}`;
  return result;
}

console.log(solve([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 5));

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
