const input = ['A', 'B', 'C', 'D'];
const k = 3;

const result = new Array(k);

const combine = (inputIndex, resultIndex) => {
    if (resultIndex >= k) {
        console.log(result);
        return;
    }


    for (let i = inputIndex; i < input.length; i++) {
        result[resultIndex] = input[i];
        combine(i + 1, resultIndex + 1);
    }
};

combine(0, 0);
