// const coins = [1, 2];
// const sum = 4;
// const coins = [1, 2, 5];
// const sum = 5;
// const coins = [1, 2, 3, 4, 6];
// const sum = 6;
// const coins = [1, 2, 5, 10];
// const sum = 13;
const coins = [1, 2, 5, 10, 20, 50, 100];
const sum = 100;

let combinationsIndex = 0;

// If we want to generate all the combinations
// let currentCombinations = [];
// let allCombinations = [];

const findCombinationsCount = (currentSum, index) => {
    if (currentSum == 0) {
        // If we want to generate all the combinations
        // allCombinations.push([...currentCombinations]);   

        return 1;
    }

    if (currentSum < 0) {
        return 0;
    }

    let combinationsCount = 0;

    for (let i = index; i < coins.length; i++) {
        // If we want to generate all the combinations
        // currentCombinations.push(coins[i]);

        combinationsCount += findCombinationsCount(currentSum - coins[i], i);

        // If we want to generate all the combinations
        // currentCombinations.pop();
    }

    return combinationsCount;
};

const combinationsCount = findCombinationsCount(sum, 0);

console.log(combinationsCount);
// console.log(allCombinations);
