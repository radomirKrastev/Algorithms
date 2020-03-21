function solve(arr) {
  let n = 3;
  let res = new Array(n);
  let final = [];

  function combine(index, start) {
    if (index >= n) {
      final.push(res.join(", "));
      //   console.log(res.join(", "));
    } else {
      for (let i = start; i < arr.length; i++) {
        res[index] = arr[i];
        combine(index + 1, i + 1);
      }
    }
  }

  combine(0, 0);
}

//Lisa, Yoana, Marta, Rachel
//Lisa, Yoana, Marta
// Lisa, Yoana, Rachel
// Lisa, Marta, Rachel
// Yoana, Marta, Rachel

// function solve(girls) {
//   let girlsSpots = 3;
//   let girlsTeam = Array(girlsSpots);

//   function combine(index, start) {
//     if (index >= girlsSpots) {
//       console.log(girlsTeam.join(", "));
//     } else {
//       for (let i = 0; i < girls.length; i++) {
//         girlsTeam[index] = girls[i];
//         combine(index + 1);
//       }
//     }
//   }

//   combine(0);
// }

// const n = 5;
// const k = 3;
// const result = Array(k).fill(0);

// const arr = Array(n);

// for (let i = 0; i < n; i++) {
//   arr[i] = i;
// }

// function variate(index) {
//   if (index >= result.length) {
//     console.log(result.join(", "));
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       result[index] = arr[i];
//       variate(index + 1);
//     }
//   }
// }

solve(["Lisa", "Yoana", "Marta", "Rachel"]);

// solve(["Linda", "Amy", "Katty"], ["John", "Bill"]);

//Lisa, Yoana, Marta, George, Garry
// Lisa, Yoana, Marta, George, Bob
// Lisa, Yoana, Marta, Garry, Bob
// Lisa, Yoana, Rachel, George, Garry
// Lisa, Yoana, Rachel, George, Bob
// Lisa, Yoana, Rachel, Garry, Bob
// Lisa, Marta, Rachel, George, Garry
// Lisa, Marta, Rachel, George, Bob
// Lisa, Marta, Rachel, Garry, Bob
// Yoana, Marta, Rachel, George, Garry
// Yoana, Marta, Rachel, George, Bob
// Yoana, Marta, Rachel, Garry, Bob

//Lisa, Yoana, Marta, Rachel
//Lisa, Yoana, Marta
// Lisa, Yoana, Rachel
// Lisa, Marta, Rachel
// Yoana, Marta, Rachel
