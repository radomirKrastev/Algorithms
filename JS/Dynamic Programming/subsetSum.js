// const sum = 16;
// const numbers = [8, 3, 2, 1, 12, 1];
// const sum = 6;
// const numbers = [3, 5, 1, 4, 2];
const sum = 19;
const numbers = [3, 5, -1, 10, 5, 7];

let subsetSum = [];
const retrivedNumbers = [];

const findSubsetSum = () => {
    let isFound = false;

    for (let i = 0; i < numbers.length; i++) {
        subsetSum.push(numbers[i]);

        if (retrivedNumbers.findIndex(x => x.value == numbers[i])) {
            retrivedNumbers.push({ value: numbers[i], subtract: NaN });
        }

        const sums = [];

        for (let y = 0; y < subsetSum.length - 1; y++) {
            const aggregate = subsetSum[y] + numbers[i];

            if (retrivedNumbers.findIndex(x => x.value == aggregate)) {
                retrivedNumbers.push({ value: aggregate, subtract: numbers[i] });
            }

            sums.push(aggregate);

            if (aggregate == sum) {
                isFound = true;
                break;
            }
        }

        subsetSum = [...new Set([...subsetSum, ...sums])];

        if (isFound) {
            break;
        }
    }
};

const retriveSubset = () => {
    const subset = [];

    let val = sum;

    while (!isNaN(val)) {
        const obj = retrivedNumbers.find(x => x.value == val);

        isNaN(obj.subtract) ? subset.push(obj.value) : subset.push(obj.subtract);

        val = val - obj.subtract;
    }

    return subset;
};

findSubsetSum();

console.log(retriveSubset().reverse());
