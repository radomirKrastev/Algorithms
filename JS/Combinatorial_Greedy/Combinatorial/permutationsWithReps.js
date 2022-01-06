// const input = ['A', 'B', 'C'];
// const input = ['A', 'B', 'C', 'C'];
const input = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const swap = (x, y) => {
    const xValue = input[x];
    input[x] = input[y];
    input[y] = xValue;
};

const permute = (index) => {    
    // console.log({index});
    if (index >= input.length) {
        console.log(input.join(' '));
        return;
    }
    
    const swapped = new Set();

    // console.log('', {swapped});
    
    for (let i = index; i < input.length; i++) {
        // console.log('a', {index, i, swapped});
        if(!swapped.has(input[i])) {
            swap(i, index);
            permute(index + 1);    
            // console.log('AFTER SECOND', {index, i, swapped});
            swap(i, index);
            swapped.add(input[i]);
            // console.log({swapped});
        }
    }
};

permute(0);
