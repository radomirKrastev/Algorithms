// let coins = [50, 20, 10, 5, 2, 1];
// const totalSum = 923;

var coins = [1];
var totalSum = 42;

// var coins = [ 1, 2, 5 ];
// var totalSum = 78;

// var coins = [3, 7];
// var totalSum = 11;

// var coins = [1, 2, 5];
// var totalSum = 2031154123;

// var coins = [1, 9, 10 ];
// var totalSum = 27;

// var coins = [ 1, 2, 3, 4 ];
// var totalSum = 1234;

// var coins = [ 1000, 200, 30, 4 ];
// var totalSum = 1234;

// var coins = [1, 3, 214, 5 ];
// var totalSum = 214;

coins = coins.sort((x, y) => y - x);


const calculate = (coins, totalSum) => {
    let result = {};
    let totalCoins = 0;
    let currentSum = 0;
    let index = 0;

    while (currentSum < totalSum) {
        if (currentSum + coins[index] <= totalSum) {
            currentSum += coins[index];
            const count = result[coins[index]] ? result[coins[index]] + 1 : 1;
            result[coins[index]] = count;
            totalCoins++;
            continue;
        }
        
        if (index == coins.length - 1 && currentSum > totalSum) {
            throw new Error('Sorry. Unreachable Sum!');
        }

        index++;
    }

    console.log(`Number of coins to take: ${totalCoins}`);

    const keys = (Object.keys(result)).reverse();

    for (const key of keys) {
        console.log(`${result[key]} coin(s) with value ${key}`);
    }
};

calculate(coins, totalSum);
