const input = 3;
const arr = new Array(input).fill(1);
let logValue = arr.join(' ');

const loopsToRecursion = (index, arr) => {
    let str = arr.length > 1 ? arr.join(' ') : arr[0];

    if (str == 1) {
        return
    }

    if (logValue != str) {
        logValue = str;
        console.log(str);
    }

    if (arr[0] == input && arr.findIndex(x => x != input) <= -1) {
        return;
    }

    if ((index + 1 < input && arr[index + 1] == input) || index == input - 1) {
        if (arr[index] < input) {
            for (let x = input - 1; x > index; x--) {
                arr[x] = 1;
            }

            arr[index] = arr[index] + 1;

            if (index == input - 1) {
                loopsToRecursion(index, arr);
            } else {
                loopsToRecursion(index + 1, arr);
            }
        } else {
            loopsToRecursion(index - 1, arr);
        }
    } else {
        loopsToRecursion(index + 1, arr)
    }
};

loopsToRecursion(input - 1, arr);
