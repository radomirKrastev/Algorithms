// const permutedCables = [2, 5, 3, 8, 7, 4, 6, 9, 1];
// const permutedCables = [4, 3, 2, 1];
const permutedCables = [1, 2, 3];


let matrix = new Array(permutedCables.length + 1);

for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(permutedCables.length + 1).fill(0);
}

for (let row = 1; row < matrix.length; row++) {
    const closeSideElement = permutedCables[row - 1];

    for (let col = 1; col < matrix.length; col++) {
        const farSideElement = col;

        matrix[row][col] = closeSideElement == farSideElement 
        ? (matrix[row - 1][col] + 1) 
        : Math.max(
            Math.max(matrix[row][col - 1], matrix[row][col]), 
            Math.max(matrix[row - 1][col], matrix[row][col])
        );
    }
}

console.log(matrix[matrix.length - 1][permutedCables.length]);
