const right = 'R';
const down = 'D';
const left = 'L';
const up = 'U';
const start = 'S';

const n = 4;
const snakes = new Set();
const snake = [];
const coordinates = new Set();

const generateSnakes = (row, col, direction) => {
    // console.log({row, col, direction, snake})
    if (snake.length >= n) {
        // console.log('ENDDDDD')
        snakes.add(snake.join(''));
    } else {
        const currentCoordinates = `${row} ${col}`;
        // console.log({contains: coordinates.has(currentCoordinates), currentCoordinates})

        if (!coordinates.has(currentCoordinates)) {
            snake.push(direction);
            coordinates.add(currentCoordinates);
            
            generateSnakes(row, col + 1, right);
            generateSnakes(row + 1, col, down);
            generateSnakes(row, col - 1, left);
            generateSnakes(row - 1, col, up);
            
            snake.pop();
            coordinates.delete(currentCoordinates);
        }
    }
};

generateSnakes(0, 0, start);

const getFlippedSnake = (snake) => {
    return snake.split('').map(x => {
        switch (x) {
            case up:
                x = down;
                break;
            case down:
                x = up;
                break;
            default:
                x = x;
        }

        return x;
    }).join('');
};

const getReversedSnake = (snake) => {
    const newSnake = [];
    newSnake[0] = start;

    for (let i = 1; i < snake.length; i++) {
        newSnake[i] = snake[snake.length - i];
    }

    return newSnake.join('');
};

const getRotatedSnake = (snake) => {
    return snake.split('').map(x => {
        switch (x) {
            case right:
                x = down;
                break;
            case down:
                x = left;
                break;
            case left:
                x = up;
                break;
            case up:
                x = right;
                break;
            default:
                x = x;
        }

        return x;
    }).join('');
};

const getUniqueSnakes = (snakes) => {
    const allSnakes = new Set();
    const uniqueSnakes = new Set();

    for (let normalSnake of snakes) {

        if (!allSnakes.has(normalSnake)) {
            uniqueSnakes.add(normalSnake);
    
            let reversedSnake = getReversedSnake(normalSnake);
            let flippedSnake = getFlippedSnake(normalSnake);
            let reverseFlippedSnake = getReversedSnake(flippedSnake);

            for (let i = 0; i < 4; i++) {
                allSnakes.add(normalSnake);
                normalSnake = getRotatedSnake(normalSnake);
                
                allSnakes.add(reversedSnake);
                reversedSnake = getRotatedSnake(reversedSnake);
                
                allSnakes.add(flippedSnake);
                flippedSnake = getRotatedSnake(flippedSnake);
                
                allSnakes.add(reverseFlippedSnake);
                reverseFlippedSnake = getRotatedSnake(reverseFlippedSnake);
            }
        }
    }

    return uniqueSnakes;
};

const allSnakesVariations = getUniqueSnakes(snakes);

allSnakesVariations.forEach(x => {
    console.log(x);
});

console.log('Snakes count =', allSnakesVariations.size);
