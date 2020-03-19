function solve(a, b) {
  let matrix = new Array(a.length + 1).fill().map(() => new Array(b.length + 1).fill(0));

  for (let r = 1; r < a.length + 1; r++) {
    let rowA = r - 1;
    for (let c = 1; c < b.length + 1; c++) {
      let colB = c - 1;

      if (a[rowA] !== b[colB]) {
        matrix[r][c] = Math.max(matrix[r - 1][c], matrix[r][c - 1]);
      } else {
        matrix[r][c] = matrix[r - 1][c - 1] + 1;
      }
    }
  }

  function getLCS() {
    let row = a.length;
    let col = b.length;
    let result = "";

    while (row !== 0 && col !== 0) {
      if (a[row - 1] !== b[col - 1]) {
        if (matrix[row - 1][col] >= matrix[row][col - 1]) {
          row--;
        } else {
          col--;
        }

        continue;
      }

      result += a[row - 1];
      row--;
      col--;
    }

    return result;
  }

  console.log(`Length: ${matrix[a.length][b.length]}`);
  console.log(
    getLCS()
      .split("")
      .reverse()
      .join("")
  );
}

solve("abc", "adb");
solve("ink some beer", "drink se ber");

// abc
// adb 	2
// ink some beer
// drink se ber 	10
// tree
// team 	2
