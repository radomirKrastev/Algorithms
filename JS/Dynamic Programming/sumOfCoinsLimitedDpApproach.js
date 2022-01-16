const coins = [1, 2, 2, 3, 3, 4, 6];
const sum = 6;

// const coins = [1, 2, 3];
// const sum = 3;

// const coins = [1, 2, 2, 3];
// const sum = 3;

// const coins = [1, 2, 2, 5];
// const sum = 5;

// const coins = [1, 2, 2, 5, 5, 10];
// const sum = 13;

// const coins = [50, 20, 20, 20, 20, 20, 10];
// const sum = 100;

coins.sort((a, b) => a - b);

let combinationsCount = [];
let coinsUsed = [];

for (let index = 0; index <= sum; index++) {
    coinsUsed.push([]);
    combinationsCount.push(0);
}

combinationsCount[0] = 1;

const findCombinationsCount = () => {
    for (let coin = 0; coin < coins.length; coin++) {
        for (let coinSum = combinationsCount.length - 1; coinSum >= coins[coin]; coinSum--) {
            if (coinsUsed[coinSum].includes(coins[coin])) {
                combinationsCount[coinSum] = Math.max(combinationsCount[coinSum], combinationsCount[coinSum - coins[coin]]);
            } else {
                combinationsCount[coinSum] += combinationsCount[coinSum - coins[coin]];
                coinsUsed[coinSum].push(coins[coin]);
            }                
        }
        
    }  
};

findCombinationsCount();

console.log(combinationsCount);
console.log(combinationsCount[sum]);


