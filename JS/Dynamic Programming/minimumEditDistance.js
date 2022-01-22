// const replaceCost = 3;
// const insertCost = 2;
// const deleteCost = 1;

// const s1 = 'abracadabra';
// const s2 = 'mabragabra';

// const replaceCost = 5;
// const insertCost = 2;
// const deleteCost = 1;

// const s1 = 'nqma bira';
// const s2 = 'ima bira';

// const replaceCost = 3;
// const insertCost = 3;
// const deleteCost = 3;

// const s1 = 'equal';
// const s2 = 'equal';

const replaceCost = 1;
const insertCost = 1;
const deleteCost = 1;

const s1 = 'equal';
const s2 = 'different';

// This was my initial solution

// let matrix = new Array(s2.length + 1);

// for (let row = 0; row < matrix.length; row++) {
//     matrix[row] = new Array(s1.length + 1).fill(0);
// }

// const populateMatrix = () => {
//     for (let row = 1; row <= s2.length; row++) {
//         for (let col = 1; col <= s1.length; col++) {
//             if (s1[col - 1] == s2[row - 1]) {
//                 matrix[row][col] = matrix[row - 1][col - 1] + 1;
//             } else {
//                 matrix[row][col] = Math.max(matrix[row][col - 1], matrix[row - 1][col]);
//             }
//         }
//     }
// };

// function setCharAt(str, index, chr) {
//     if (index > str.length - 1) return str;
//     return str.substring(0, index) + chr + str.substring(index + 1);
// }

// let editDistance = 0;
// const result = [];

// const edit = () => {
//     let row = s2.length;
//     let col = s1.length;
//     let tempStr = s1;

//     while (row != 0 || col != 0) {
//         if (col == 0) {
//             row -= 1;
//             result.push(`INSERT(${row}, ${s2[row]})`);
//             editDistance += insertCost;
//         } else if (row == 0) {
//             result.push(`DELETE(${col - 1})`);
//             editDistance += deleteCost;
//             col -= 1;
//         } else {
//             if (s1[col - 1] == s2[row - 1]) {
//                 row -= 1;
//                 col -= 1;
//             } else if (matrix[row][col - 1] > matrix[row - 1][col]) {
//                 if (tempStr.substring(col - 1) != s2.substring(row)) {
//                     result.push(`DELETE(${col - 1})`);
//                     editDistance += deleteCost;
//                 }
//                 col -= 1;
//             } else {
//                 row -= 1;

//                 if ((insertCost + deleteCost) < replaceCost) {
//                     result.push(`INSERT(${col - 1}, ${s2[row]})`);
//                     result.push(`DELETE(${col - 1})`);
//                     editDistance += insertCost + deleteCost;
//                 } else {
//                     result.push(`REPLACE(${col - 1}, ${s2[row]})`);
//                     editDistance += replaceCost;
//                 }

//                 tempStr = setCharAt(tempStr, col - 1, s2[row]);
//                 col -= 1;
//             }
//         }
//     }
// };

// populateMatrix();
// edit();

// console.log(`Minimum edit distance: ${editDistance}`);

// result.reverse().forEach(x => {
//     console.log(x);
// });

// The right Dp approach

let matrix = new Array(s1.length + 1);

for (let row = 0; row < matrix.length; row++) {
    matrix[row] = new Array(s2.length + 1).fill(0);
}

const populateMatrix = () => {
    for (let col = 1; col <= s2.length; col++) {
        matrix[0][col] = matrix[0][col - 1] + insertCost;
    }

    for (let row = 1; row <= s1.length; row++) {
        matrix[row][0] = matrix[row - 1][0] + deleteCost;
    }

    for (let row = 1; row <= s1.length; row++) {
        for (let col = 1; col <= s2.length; col++) {
            if (s1[row - 1] == s2[col - 1]) {
                matrix[row][col] = matrix[row - 1][col - 1];
            } else {
                const replaceAdditionalCost = matrix[row - 1][col - 1] + replaceCost;
                const insertAdditionalCost = matrix[row][col - 1] + insertCost;
                const deleteAdditionalCost = matrix[row - 1][col] + deleteCost;

                const additionalCost = Math.min(replaceAdditionalCost, Math.min(insertAdditionalCost, deleteAdditionalCost));
                matrix[row][col] = additionalCost;
            }
        }
    }
};

const generateResult = () => {
    const result = [];
    let row = s1.length;
    let col = s2.length;

    while (row > 0 || col > 0) {
        if (col > 0 && row == 0) {
            col--;
            result.push(`INSERT(${row}, ${s2[col]})`);
        } else if (row > 0 && col == 0) {
            row--;
            result.push(`DELETE(${row})`);
        } else {
            if (s1[row - 1] == s2[col - 1]) {
                row--;
                col--;
            } else {
                const replaceAdditionalCost = matrix[row - 1][col - 1] + replaceCost;
                const insertAdditionalCost = matrix[row][col - 1] + insertCost;
                const deleteAdditionalCost = matrix[row - 1][col] + deleteCost;
                
                const additionalCost = Math.min(replaceAdditionalCost, Math.min(insertAdditionalCost, deleteAdditionalCost));
                
                if (additionalCost == replaceAdditionalCost) {
                    row--;
                    col--;
                    result.push(`REPLACE(${row}, ${s2[col]})`);
                } else if (additionalCost == insertAdditionalCost) {
                    col--;
                    result.push(`INSERT(${row}, ${s2[col]})`);
                } else {
                    row--;
                    result.push(`DELETE(${row})`);
                }
            }
        }
    }

    return result;
};

populateMatrix();

console.log(`Minimum edit distance: ${matrix[s1.length][s2.length]}`);

generateResult().reverse().forEach(x => {
    console.log(x);
});