function solve(capacity, items) {
  let cols = capacity + 1;
  let rows = items.length + 1;

  let valueMatrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
  let itemMatrix = new Array(rows).fill().map(() => new Array(cols).fill(false));
  items = items.map(function(x) {
    return { name: x[0], weight: x[1], value: x[2] };
  });

  for (let r = 1; r < rows; r++) {
    let item = items[r - 1];
    for (let c = 0; c < cols; c++) {
      let noItemValue = valueMatrix[r - 1][c];
      let valueWithItem =
        typeof valueMatrix[r - 1][c - item.weight] !== "undefined"
          ? valueMatrix[r - 1][c - item.weight] + item.value
          : 0;

      valueMatrix[r][c] = Math.max(noItemValue, valueWithItem);
      if (valueWithItem > noItemValue) {
        itemMatrix[r][c] = true;
      }
    }
  }

  let row = rows - 1;
  let col = cols - 1;
  let totalValue = valueMatrix[row][col];
  let totalWeight = 0;
  let itemNames = [];

  while (row > 0) {
    if (itemMatrix[row][col] === true) {
      let item = items[row - 1];
      itemNames.push(item.name);
      row--;
      col -= item.weight;
      totalWeight += item.weight;
    } else {
      row--;
    }
  }

  let result = `Total Weight: ${totalWeight}\r\nTotal Value: ${totalValue}\r\n${itemNames
    .sort((a, b) => a.localeCompare(b))
    .join("\r\n")}`;

  return result;
}

// console.log(
//   solve(4, [
//     ["Light", 2, 3],
//     ["Laptop", 3, 1],
//     ["Book", 1, 3]
//   ])
// );

console.log(
  solve(20, [
    ["Item1", 5, 30],
    ["Item2", 8, 120],
    ["Item3", 7, 10],
    ["Item4", 0, 20],
    ["Item5", 4, 50],
    ["Item6", 5, 80],
    ["Item7", 2, 10]
  ])
);

// 20
// Item2 8 120
// Item3 7 10
// Item4 0 20
// Item5 4 50
// Item6 5 80
// Item7 2 10

// Total Weight: 19
// Total Value: 280
// Item2
// Item4
// Item5
// Item6
// Item7
