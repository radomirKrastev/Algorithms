// const secondSequence = 'GCCCTAGCG';
// const firstSequence = 'GCGCAATG';
// const secondSequence = 'abc';
// const firstSequence = 'abd';
// const secondSequence = 'ink some beer';
// const firstSequence = 'drink se ber';
const secondSequence = 'tree';
const firstSequence = 'team';

const matrix = [];

for (let row = 0; row <= firstSequence.length; row++) {
    matrix[row] = [];

    for (let col = 0; col <= secondSequence.length; col++) {
        matrix[row][col] = 0;
    }
}

const populateMatrix = () => {
    for (let row = 1; row <= firstSequence.length; row++) {

        for (let col = 1; col <= secondSequence.length; col++) {
            if (firstSequence[row - 1] == secondSequence[col - 1]) {
                matrix[row][col] = matrix[row - 1][col - 1] + 1;
            } else {
                matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1]);
            }
        }

    }
};

const generateLongestCommonSubsequence = () => {
    let row = firstSequence.length;
    let col = secondSequence.length;
    let length = matrix[row][col];
    const longestCommonSubsequence = [];

    while (length > 0) {
        if (firstSequence[row - 1] == secondSequence[col - 1]) {
            longestCommonSubsequence.push(firstSequence[row - 1])
            row -= 1;
            col -= 1;
            length -= 1;
        } else if (matrix[row][col - 1] > matrix[row - 1][col]) {
            col -= 1;
        } else {
            row -= 1;
        }
    }

    return longestCommonSubsequence.reverse();
};

populateMatrix();
const longestCommonSubsequence = generateLongestCommonSubsequence();

console.log(longestCommonSubsequence.length);
console.log(longestCommonSubsequence);
