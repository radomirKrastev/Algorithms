// const rows = 4;
// const columns = 9;

// let boardMatrix = [
//     ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
//     ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
//     ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
//     ['-', '-', '-', '-', '*', '-', '*', '-', '-']
// ];
const rows = 5;
const columns = 10;

let boardMatrix = [
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '*', '*', '*', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
];

const isEmpty = (row, col) => boardMatrix[row][col] == '-';

const findFirstEmptyCell = () => {
    for (let row = 0; row < boardMatrix.length; row++) {
        for (let col = 0; col < boardMatrix[row].length; col++) {
            if (isEmpty(row, col)) {
                return { row, col };
            }
        }
    }

    return - 1;
};

const findNextPosition = (row, col) => {
    if (isUpFree(row, col)) {
        return { row: row - 1, col }
    }

    if (isDownFree(row, col)) {
        return { row: row + 1, col };
    }

    if (isLeftFree(row, col)) {
        return { row, col: col - 1 };
    }

    if (isRightFree(row, col)) {
        return { row, col: col + 1 };
    }

    return -1;
};

const isUpFree = (row, col) => {
    if (row - 1 >= 0) {
        return isEmpty(row - 1, col);
    }

    return false;
};

const isDownFree = (row, col) => {
    if (row + 1 < boardMatrix.length) {
        return isEmpty(row + 1, col);
    }

    return false;
};

const isLeftFree = (row, col) => {
    if (col - 1 >= 0) {
        return isEmpty(row, col - 1);
    }

    return false;
};

const isRightFree = (row, col) => {
    if (col + 1 < boardMatrix[row].length) {
        return isEmpty(row, col + 1);
    }

    return false;
};

const findConnectedAreas = (baseCell, row, col, areas) => {
    if (baseCell == -1) {
        console.log('BASE CASE');
        return;
    }

    boardMatrix[row][col] = areas.length;
    const nextPosition = findNextPosition(row, col);

    if (nextPosition != -1) {

        areas[areas.length - 1].size++;
        findConnectedAreas(baseCell, nextPosition.row, nextPosition.col, areas);

        findConnectedAreas(baseCell, row, col, areas);
    } else if (baseCell.row == row && baseCell.col == col) {
        const firstEmptyCell = findFirstEmptyCell();
        
        areas[areas.length - 1].size++;
        if (firstEmptyCell != -1) {
            areas.push({
                size: 0,
                startRow: firstEmptyCell.row,
                startCol: firstEmptyCell.col,
            });
        }

        findConnectedAreas(firstEmptyCell, firstEmptyCell.row, firstEmptyCell.col, areas);
    }
};

const firstEmptyCell = findFirstEmptyCell();

const areas = [{
    number: 1,
    size: 0,
    startRow: firstEmptyCell.row,
    startCol: firstEmptyCell.col,
}];

if (firstEmptyCell) {
    findConnectedAreas(firstEmptyCell, firstEmptyCell.row, firstEmptyCell.col, areas);
}

for (let i = 0; i < boardMatrix.length; i++) {
    console.log(boardMatrix[i].join(' '));
}

areas.sort((a, b) => b.size - a.size || a.startRow - b.startRow || a.startCol - b.startCol);

console.log(JSON.stringify(areas, null, 2));
