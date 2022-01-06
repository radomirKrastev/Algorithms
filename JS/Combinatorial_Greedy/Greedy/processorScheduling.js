// 8, 2
// 6, 4
// 5, 3
// 4, 3
// 3, 4
// 2, 1



// 8, 4
// 6, 4
// 5, 4
// 4, 3
// 3, 4
// 2, 1

// let input = [
//     {v: 40, d: 1},
//     {v: 30, d: 2},
//     {v: 15, d: 1},
//     {v: 20, d: 1},
//     {v: 50, d: 2},
// ];

// let input = [
//     {v: 25, d: 1},
//     {v: 14, d: 1},
//     {v: 43, d: 1},
// ]; 

let input = [
    {v: 5, d: 3},
    {v: 6, d: 4},
    {v: 2, d: 1},
    {v: 3, d: 4},
    {v: 8, d: 2},
    {v: 4, d: 3},
]; 

input = input.map((x, i) => x = {...x, i: i + 1});


const maxDeadline = input.sort((a, b) => b.d - a.d)[0].d;
console.log(maxDeadline);

const sortedTasks = input.sort((a, b) => b.v - a.v);
console.log({sortedTasks});


const generateSolution = () => {
    let result = new Array(maxDeadline);

    for (const task of sortedTasks) {
        for (let i = task.d - 1; i >= 0; i--) {
            if(!result[i]) {
                result[i] = task;
                break;
            }        
        }
    }

    return result;
};

const compare = (a, b) => (a > b) - (a < b);

const printSolution = (solution) => {
    console.log(1)
    console.log(`Optimal schedulte: ${solution.sort((a,b) => compare(a.d, b.d) || compare(b.v, a.v))}`);
    console.log(`Total value: ${solution.reduce((a, b) => a += b.v, 0)}`);

};

printSolution(generateSolution());