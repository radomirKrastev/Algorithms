const input = 'nopqrstuvw'

const words = [...input];
let count = 0;

words.sort();

const swap = (x, y) => {
    const xValue = words[x];
    words[x] = words[y];
    words[y] = xValue;
};

const permute = (arr, start, end) => {
    let noConsecutiveChars = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            noConsecutiveChars = false;
            break;
        }
    }

    count = noConsecutiveChars ? count + 1 : count;

    for (let left = end - 1; left >= start; left--) {
        for (let right = left + 1; right <= end; right++) {
            if (arr[left] !== arr[right]) {
                swap(left, right);
                permute(arr, left + 1, end);
            }
        }

        const firstElement = arr[left];

        for (let i = left; i < end; i++) {
            arr[i] = arr[i + 1];
        }

        arr[end] = firstElement;
    }
};

const hasDuplicates = array => {
    return (new Set(array)).size !== array.length;
};

if (hasDuplicates(words)) {
    permute(words, 0, input.length - 1);
} else {
    const factorialize = num => {
        if (num < 0) {
            return -1;
        } else if (num == 0) {
            return 1;
        } else {
            return (num * factorialize(num - 1));
        }
    }

    count = factorialize(words.length);
}

console.log(count);
