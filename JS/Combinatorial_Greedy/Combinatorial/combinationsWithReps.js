const input = ['A', 'B', 'C'];
const k = 2;

const result = new Array(k);

const combine = (inputIndex, resultIndex) => {
    if (resultIndex >= k) {
        console.log(result);
        return;
    }


    for (let i = inputIndex; i < input.length; i++) {
        result[resultIndex] = input[i];
        combine(i, resultIndex + 1);
    }
};

combine(0, 0);
