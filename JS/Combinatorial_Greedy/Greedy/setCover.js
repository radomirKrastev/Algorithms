// let universe = new Set([1, 2, 3, 4, 5]);
// let input = [[1], [2, 4], [5], [3]];

// const universe = new Set([1, 2, 3, 4, 5]);
// const input = [[1, 2, 3, 4, 5], [2, 3, 4, 5], [5], [3]];

// const universe = new Set([1, 3, 5, 7, 9, 11, 20, 30, 40]);
// const input = [[20], [1, 5, 20, 30], [3, 7, 20, 30 , 40], [9, 30], [11, 20, 30, 40], [3, 7, 40]];

// const universe = new Set([1, 2, 3, 4, 5]);
// const input = [[1, 3, 5], [5, 1], [3, 2], [2, 4]];

// const universe = new Set([1, 2, 3, 4, 5]);
// const input = [[1, 3, 5], [1, 2], [3, 4]];

const universe = new Set([1, 2, 3, 4, 5, 6]);
const input = [[1, 2, 5], [2, 3, 5], [3, 4, 5], [4, 5], [1, 3, 4, 6]];

let sets = input.slice(0);

const orderSets = (setToOrder) => {
    const count = setToOrder.filter(x => universe.has(x)).length;
    return count
};

const findSets = (universe, sets) => {
    const result = [];

    while(universe.size > 0) {
        console.log({sets});
        sets.sort((a, b) => orderSets(b) - orderSets(a));
        result.push(sets[0]);

        sets[0].forEach(x => {
            universe.delete(x);
        });

        sets = sets.slice(1);
    }

    console.log(`Sets to take ${result.length}`)
    result.forEach(x => {
        console.log(`{ ${x.join(', ')} }`)
    });
};

findSets(universe, sets);
