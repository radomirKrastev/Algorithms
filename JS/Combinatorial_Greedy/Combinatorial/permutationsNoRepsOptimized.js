// const input = ['A', 'B', 'C'];
const input = ['A', 'B', 'C', 'C'];

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
    
    permute(index + 1);

    // console.log('AFTER FIRST', {index});
    
    for (let i = index + 1; i < input.length; i++) {
        swap(i, index);
        permute(index + 1);    
        // console.log('AFTER SECOND', {index, i});
        swap(i, index);
    }
};

permute(0);
