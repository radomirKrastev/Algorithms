// const fibonacciMember = 1;
// const fibonacciMember = 2;
// const fibonacciMember = 5;
// const fibonacciMember = 10;
// const fibonacciMember = 20;
// const fibonacciMember = 36;
const fibonacciMember = 50;


// Iterative approach:

// const findFibonacci = () => {
    
//     if (fibonacciMember == 1 || fibonacciMember == 2) {
//         return 1;
//     } 
    
//     let prevFibonacci = 1;
//     let fibonacci = 1;
    
//     for (let i = 2; i < fibonacciMember; i++) {
//         let current = fibonacci + prevFibonacci;
//         prevFibonacci = fibonacci;
//         fibonacci = current;
//     }

//     console.log(fibonacci);
// };

// findFibonacci();

// Recursive approach with memoization:

let foundFibonacciNumbers = [1, 1];

let steps = 1;

const findFibonacci = (index) => {
    if(foundFibonacciNumbers[index]) {
        return foundFibonacciNumbers[index];
    }
    
    if(index <= 1) {
        return 1;
    }
    
    const fibonacci = findFibonacci(index - 1) + findFibonacci(index - 2);
    foundFibonacciNumbers[index] = fibonacci;

    return fibonacci;
};

console.log(findFibonacci(fibonacciMember - 1));
