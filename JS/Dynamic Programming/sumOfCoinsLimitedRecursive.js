// const coins = [1, 2, 2, 3, 3, 4, 6];
// const sum = 6;

// const coins = [1, 2, 3];
// const sum = 3;

// const coins = [1, 2, 2, 3];
// const sum = 3;

// const coins = [1, 2, 2, 5];
// const sum = 5;

// const coins = [1, 2, 2, 5, 5, 10];
// const sum = 13;

const coins = [50, 20, 20, 20, 20, 20, 10];
const sum = 100;

let currentCombinations = [];
let allCombinations = new Set();

let c = 0;

const findAllCombinations = (currentSum, index) => {
    if (currentSum == 0) {
        allCombinations.add(currentCombinations.toString());
        return;
    }
    
    if (currentSum < 0) {
        return;
    }

    for (let i = index; i < coins.length; i++) {
        if (currentSum - coins[i] >= 0) {
            currentCombinations.push(coins[i]);

            findAllCombinations(currentSum - coins[i], i + 1);
            currentCombinations.pop();
        }
    }

    return;
};

findAllCombinations(sum, 0);
console.log([...allCombinations]);
console.log([...allCombinations].length);

