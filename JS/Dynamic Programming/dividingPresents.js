// const input = [3, 2, 3, 2, 2, 77, 89, 23, 90, 11];
// const input = [2, 2, 4, 4, 1, 1];
// const input = [7, 17, 45, 91, 11, 32, 102, 33, 6, 3];
const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 22];

const totalSum = input.reduce((a, b) => {
    return a += b;
}, 0);

const middle = Math.floor(totalSum / 2);

let matrix = [];

for (let i = 0; i < input.length; i++) {
    matrix[i] = new Array(middle).fill(false);
}

const closestPosition = {
    row: 0,
    col: 0,
};

const fillMatrix = () => {
    let previousSums = [];
    
    for (let row = 0; row < input.length; row++) {
        const currentNumber = input[row]; 
        
        matrix[row][currentNumber] = true;
    
        const additionaSums = new Set();
        additionaSums.add(currentNumber);
        
        for (let i = 0; i < previousSums.length; i++) {
            const sum = currentNumber + previousSums[i];
            
            if(sum <= middle) {
                matrix[row][sum] = true;
                additionaSums.add(sum);
    
                if((middle - sum) < (middle - closestPosition.col)) {
                    closestPosition.row = row;
                    closestPosition.col = sum;
                }
            }
    
        }
        
        previousSums = [...new Set([...previousSums, ...additionaSums])];
    };
};

const retrivePresents = () => {
    const presents = [];
    
    while(closestPosition.col > 0) {
        const present = input[closestPosition.row];
        presents.push(present);
        
        closestPosition.col -= present;

        for (let row = closestPosition.row - 1; row >= 0; row--) {
            if(matrix[row][closestPosition.col]) {
                closestPosition.row = row;
                break;
            }            
        }
    }

    return presents;
};

fillMatrix();

const presents = retrivePresents();

const firstBrotherPresentsSum = presents.reduce((a, b) => {
    return a += b;
}, 0);

console.log(`Difference: ${(totalSum - firstBrotherPresentsSum) - firstBrotherPresentsSum}`);
console.log(`Alan: ${firstBrotherPresentsSum} Bob: ${totalSum - firstBrotherPresentsSum}`);
console.log(`Alan takes: ${presents.join(' ')}`);
console.log(`Bob takes the rest`);
