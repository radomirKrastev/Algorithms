const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
const length = 8;

let bestPrices = new Array(prices.length).fill(0);
let prevBest = new Array(prices.length).fill(0);
bestPrices[1] = prices[1];
prevBest[1] = 1;

const findBestPrices = (lengthLeft, chunk) => {
    if(lengthLeft - chunk == 0) {
        return prices[lengthLeft];
    } else if (lengthLeft - chunk < 0) {
        return 0;
    }
    
    let price = 0;
    
    
    for (let i = 1; i <= lengthLeft; i++) {
        const rightPart = lengthLeft - i;
        
        const leftPart = i;    

        const leftPrice = lengthLeft > leftPart && bestPrices[leftPart] ? bestPrices[leftPart] : findBestPrices(leftPart, i);
        const rightPrice = lengthLeft > rightPart && bestPrices[rightPart] ? bestPrices[rightPart] : findBestPrices(rightPart, i);
        
        price = leftPrice + rightPrice;

        if(bestPrices[lengthLeft] == 0 || price > bestPrices[lengthLeft]) {
            bestPrices[lengthLeft] = price;
            prevBest[lengthLeft] = Math.max(rightPart, leftPart);
        }
    }

    return price;
};

const printBestRodCutting = () => {
    console.log(bestPrices[length]);
    let result = [];
    let cuttingLength = length;

    let previous = prevBest[length];
    
    while(cuttingLength > 0) {
        if(cuttingLength - previous >= 0) {
            cuttingLength -= previous;
            result.push(previous);
            previous = prevBest[previous];
        } else {
            for (let i = previous; i > 0; i--) {
                if(prevBest[i] <= cuttingLength) {
                    previous = prevBest[i];
                    break;
                }                
            }
        }

    }
    
    console.log(result.reverse().join(' '));
};

findBestPrices(length, 1);

printBestRodCutting();

