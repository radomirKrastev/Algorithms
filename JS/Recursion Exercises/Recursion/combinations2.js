const combine = (dataArray, combineArray, index, border) => {
    if (index >= combineArray.length) {
        console.log(combineArray.join(''));
        return;
    }

    for (let i = border + 1; i < dataArray.length; i++) {
        combineArray[index] = dataArray[i];
        combine(dataArray, combineArray, index + 1, i);
    }
};

// [x, x]

// [1, 1] [2, ] [3, ] [] 

const maxElements = 3;
const border = -1;

const combineArray = new Array(maxElements);

combineArray.fill('x');

combine([1, 2, 3, 4, 5], combineArray, 0, border);
