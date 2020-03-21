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

  let common = matrix[a.length][b.length];

  console.log(`Deletions and Insertions: ${(a.length - common) * 2}`);
}

solve("YMCA", "HMBB");
solve("JFEIOWHGOW", "GHEWQHFEWQ");
