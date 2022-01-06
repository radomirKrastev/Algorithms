let labyrinth = [];

const step = '_';
const wall = '*';
const exit = 'e';
const visited = 'v';
let pathFound = false;
let path = [];

// labyrinth.push([step, step, step]);    
// labyrinth.push([step, wall, step]);    
// labyrinth.push([step, step, exit]); 

// labyrinth.push([step, wall, wall, step, exit]);    
// labyrinth.push([step, step, step, step, step]);    
// labyrinth.push([wall, wall, wall, wall, wall]);

labyrinth.push([step, step, step, step, wall, step]);    
labyrinth.push([wall, wall, step, exit, step, step]);    
labyrinth.push([step, step, step, step, wall, step]);    
labyrinth.push([step, step, wall, step, step, step]);

const printBoard = board => {
    for (let r = 0; r < board.length; r++) {
        console.log(board[r].join(' '));
    }
};

const isLeftPossible = (board, row, col) => {
    if (col < 0 || board[row][col] == wall || board[row][col] == visited) {
        return false;
    }

    return true;
};

const isUpPossible = (board, row, col) => {
    if (row < 0 || board[row][col] == wall || board[row][col] == visited) {
        return false;
    }

    return true;
};

const isRightPossible = (board, row, col) => {
    if (col >= board[row].length || board[row][col] == wall || board[row][col] == visited) {
        return false;
    }

    return true;
};

const isDownPossible = (board, row, col) => {
    if (row >= board.length || board[row][col] == wall || board[row][col] == visited) {
        return false;
    }

    return true;
};

const findPaths = (labyrinth, row, col) => {
    if (labyrinth[row][col] == exit) {
        pathFound = true;
    } else {
        labyrinth[row][col] = visited;
    }
    
    if (pathFound) {
        pathFound = false;
        console.log('FOUND', path.join(','))
        return null;
    }
    
    if (isLeftPossible(labyrinth, row, col - 1)) {
        path.push('L');
        findPaths(labyrinth, row, col - 1);
        if(labyrinth[row][col - 1] != exit) {
            labyrinth[row][col - 1] = step;
        }

        path.pop();
    } 
    
    if (isUpPossible(labyrinth, row - 1, col)) {
        path.push('U');
        findPaths(labyrinth, row - 1, col);
        if(labyrinth[row - 1][col] != exit) {
            labyrinth[row - 1][col] = step;
        }
        
        path.pop();
    } 
    
    if (isRightPossible(labyrinth, row, col + 1)) {
        path.push('R');
        findPaths(labyrinth, row, col + 1);
        if(labyrinth[row][col + 1] != exit) {
            labyrinth[row][col + 1] = step;
        }

        path.pop();
    }

    if (isDownPossible(labyrinth, row + 1, col)) {
        path.push('D');
        findPaths(labyrinth, row + 1, col);
        if(labyrinth[row + 1][col] != exit) {
            labyrinth[row + 1][col] = step;
        }
        
        path.pop();
    }
};

findPaths(labyrinth, 0, 0);
printBoard(labyrinth)