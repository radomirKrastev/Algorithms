// const size = 5;
// const size = 6;
// const size = 7;
// const size = 8;
// const size = 9;
// const size = 10;
// const size = 11;
const size = 12;

let board = new Array(size).fill([]);

board = board.map(x => {
    return x = new Array(size).fill(0);
});

const movesMapper = {
    rightHighTop: (row, col) => { return { row: row - 2, col: col + 1 } },
    rightLowTop: (row, col) => { return { row: row - 1, col: col + 2 } },
    rightHighBottom: (row, col) => { return { row: row + 1, col: col + 2 } },
    rightLowBottom: (row, col) => { return { row: row + 2, col: col + 1 } },
    leftHighTop: (row, col) => { return { row: row - 2, col: col - 1 } },
    leftLowTop: (row, col) => { return { row: row - 1, col: col - 2 } },
    leftHighBottom: (row, col) => { return { row: row + 1, col: col - 2 } },
    leftLowBottom: (row, col) => { return { row: row + 2, col: col - 1 } },
};

const checkPossibilitiesCount = (row, col) => {
    let possibilities = 0;

    if(row < 0 || row >= size || col < 0 || col >= size || board[row][col] != 0) {
        return -1;
    }

    for (const move in movesMapper) {
        const position = movesMapper[move](row, col);
        
        if (position.row >= 0 && position.row < size && position.col >= 0 && position.col < size && board[position.row][position.col] == 0) {
            possibilities++;
        }
    }

    return possibilities;
};

const getAdjacentMovesPossibilities = (row, col) => {
    let possibilities = 0;

    for (const move in movesMapper) {
        const position = movesMapper[move](row, col);
        
        const count = checkPossibilitiesCount(position.row, position.col);

        possibilities += count >= 0 ? count : 0;
    }

    return possibilities;
};


const moveKnight = () => {
    board[0][0] = 1;
    let steps = 1;

    let row = 0;
    let col = 0;

    while (steps < size * size) {
        let nextMove = '';
        let nextRow = 0;
        let nextCol = 0;
        let leastPossibilities = Number.MAX_VALUE;

        for (const move in movesMapper) {
            const position = movesMapper[move](row, col);
            const possibilities = checkPossibilitiesCount(position.row, position.col);
            
            if (possibilities < leastPossibilities && possibilities >= 0) {
                nextMove = move;
                nextRow = position.row;
                nextCol = position.col;
                leastPossibilities = possibilities;

                
            } else if (possibilities == leastPossibilities && possibilities >= 0) {
                const currentAdjacentPossibilities = getAdjacentMovesPossibilities(nextRow, nextCol);
                const potentialAdjacentPossibilities = getAdjacentMovesPossibilities(position.row, position.col);
            }
        }

        steps++;
        row = nextRow;
        col = nextCol;
        board[row][col] = steps;
    }

    console.log(board)
};

moveKnight();
