// const input = [1, 5, 3, 5];
const input = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

input.sort();

const swap = (x, y) => {
    const xValue = input[x];
    input[x] = input[y];
    input[y] = xValue;
};

const permute = (arr, start, end) => {
    console.log(input.join(' '));

    for (let left = end - 1; left >= start; left--) {
        for (let right = left + 1; right <= end; right++) {
            if(arr[left] !== arr[right]) {
                swap(left, right);
                // console.log('BEFORE', {arr, left, right});
                permute(arr, left + 1, end);
                // console.log('AFTER', {arr, left, right});
            }            
        }
        
        // console.log('AFTER 2', {arr, left, end});
        const firstElement = arr[left];

        for (let i = left; i < end; i++) {
            arr[i] = arr[i + 1];            
        }

        arr[end] = firstElement;
    }
};

permute(input, 0, 3);
