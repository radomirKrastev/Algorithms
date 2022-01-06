let count = 0;
const generateSolutions = (board, row) => {    
    if (row >= board.length ) {
        console.log(++count)
        printBoard(board);

        return null;
    }

    for (let c = 0; c < board[0].length; c++) {
        if(isPositionSecure(board, row, c)) {
            board[row][c] = 'q';
            generateSolutions(board, row + 1);
            board[row][c] = '_';
        }
    }
};

const printBoard = board => {
    for (let r = 0; r < board.length; r++) {
        console.log(board[r].join(' '));
    }
};

const isLeftLineSecure = (board, row, col) => {
    if (col == 0) {
        return true;
    }
    
    for (let c = col - 1; c >= 0; c--) {
        if (board[row][c] == 'q') {
            return false;
        }
    }

    return true;
};

const isTopLineSecure = (board, row, col) => {
    if (row == 0) {
        return true;
    }

    for (let r = row - 1; r >= 0; r--) {
        if (board[r][col] == 'q') {
            return false;
        }
    }

    return true;
};

const isRightLineSecure = (board, row, col) => {
    if (col == board[row].length - 1) {
        return true;
    }

    for (let c = col + 1; c < board[col].length; c++) {
        if (board[row][c] == 'q') {
            return false;
        }
    }

    return true;
};

const isBottomLineSecure = (board, row, col) => {
    if (row == board.length - 1) {
        return true;
    }

    for (let r = row + 1; r < board.length; r++) {
        if (board[r][col] == 'q') {
            return false;
        }
    }

    return true;
};

const isLeftTopDiagonalSecure = (board, row, col) => {
    if (col == 0 || row == 0) {
        return true;
    }

    let index = row <= col ? row : col;

    for (let i = index; i > 0; i--) {
        if (board[--row][--col] == 'q') {
            return false;
        }
    }

    return true;
};

const isRightTopDiagonalSecure = (board, row, col) => {
    for (let i = 0; i < board.length; i++) {

        if (col == board[row].length - 1 || row == 0) {
            return true;
        }

        ++col;
        --row;

        if (board[row][col] == 'q') {
            return false;
        }
    }

    return true;
};

const isLeftBottomDiagonalSecure = (board, row, col) => {
    if (col == 0 || row == board.length) {
        return true;
    }

    for (let i = 0; i < board.length; i++) {
        if (--col == 0 || ++row >= board.length - 1) {
            return true;
        }
        
        if (board[row][col] == 'q') {
            return false;
        }
    }

    return true;
};

const isRightBottomDiagonalSecure = (board, row, col) => {
    if (col == board[row].length - 1 || row == board.length - 1) {
        return true;
    }

    let index = row >= col ? row : col;

    for (let i = index; i < board.length - 1; i++) {
        if (board[++row][++col] == 'q') {
            return false;
        }
    }

    return true;
};

const isPositionSecure = (board, row, col) => {
    // console.log(1, isLeftLineSecure(board, row, col), row, col)
    // console.log(2, isTopLineSecure(board, row, col), row, col)
    // console.log(3, isRightLineSecure(board, row, col), row, col)
    // console.log(4, isBottomLineSecure(board, row, col), row, col)
    // console.log(5, isLeftTopDiagonalSecure(board, row, col), row, col)
    // console.log(6, isRightTopDiagonalSecure(board, row, col), row, col)
    // console.log(7, isLeftBottomDiagonalSecure(board, row, col), row, col)
    // console.log(8, isRightBottomDiagonalSecure(board, row, col), row, col)

    const ALL = isLeftLineSecure(board, row, col) && isTopLineSecure(board, row, col)
        && isRightLineSecure(board, row, col) && isBottomLineSecure(board, row, col)
        && isLeftTopDiagonalSecure(board, row, col) && isRightTopDiagonalSecure(board, row, col)
        && isLeftBottomDiagonalSecure(board, row, col) && isRightBottomDiagonalSecure(board, row, col);

        // console.log({ ALL })
    return ALL
};

const boardRows = 4;
let board = [];

const generateColumn = () => {
    const col = new Array(4);
    return col.fill('_');
};

for (let row = 0; row < boardRows; row++) {
    board.push(generateColumn());    
}

generateSolutions(board, 0);
