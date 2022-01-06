// const matrix = [
//     [1, 3, 2, 1],
//     [5, 3, 2, 1],
//     [1, 7, 3, 1],
//     [1, 3, 1, 1],
// ];

// const matrix = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
// ];

// const matrix = [
//     [1, 0, 6],
//     [8, 3, 7],
//     [2, 4, 9],
// ];

const matrix = [
    [2, 6, 1, 8, 9, 4, 2],
    [1, 8, 0, 3, 5, 6, 7],
    [3, 4, 8, 7, 2, 1, 8],
    [0, 9, 2, 8, 1, 7, 9],
    [2, 7, 1, 9, 7, 8, 2],
    [4, 5, 6, 1, 2, 5, 6],
    [9, 3, 5, 2, 8, 1, 9],
    [2, 3, 4, 1, 7, 2, 8],
];

const populateSums = () => {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == 0 && col == 0) {
                continue;
            }
    
            if (row - 1 < 0) {
                matrix[row][col] += matrix[row][col - 1];
            } else if (col - 1 < 0) {
                matrix[row][col] += matrix[row - 1][col];
            } else {
                if (matrix[row - 1][col] >= matrix[row][col - 1]) {
                    matrix[row][col] += matrix[row - 1][col];
                } else {
                    matrix[row][col] += matrix[row][col - 1];
                }
            }
        }
    }
};

const findMaxBackPath = (row, col, path) => {
    if (row == 0 && col == 0) {
        return path;
    }

    if(row - 1 < 0) {
        path.push([row, col - 1]);
        return findMaxBackPath(row, col - 1, path);
    } else if (col - 1 < 0) {
        path.push([row - 1, col]);
        return findMaxBackPath(row - 1, col, path);
    } else if(matrix[row][col - 1] >= matrix[row - 1][col]) {
        path.push([row, col - 1]);
        return findMaxBackPath(row, col - 1, path);
    } else {
        path.push([row - 1, col]);
        return findMaxBackPath(row - 1, col, path);
    }
};

const findMaxSumPath = () => {
    populateSums();
    const path = findMaxBackPath(matrix.length - 1, matrix[matrix.length - 1].length - 1, [[matrix.length - 1, matrix[matrix.length - 1].length - 1]]);

    console.log(path.reverse());

};

findMaxSumPath();
