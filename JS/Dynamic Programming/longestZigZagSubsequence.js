// const input = [8, 3, 5, 7, 0, 8, 9, 10, 20, 20, 20, 12, 19, 11];
// const input = [1, 2, 3];
const input = [1, 3, 2];
// const input = [24, 5, 31, 3, 3, 342, 51, 114, 52, 55, 56, 58];

//even elements - smaller than its neighbors / odd elements - bigger than its neighbors  
const firstConditionData = new Array(input.length);
//odd elements - smaller than its neighbors / even elements - bigger thant its neighbors  
const secondConditionData = new Array(input.length);

const assignDataIfLongerLength = (array, current, previous) => {
    if (array[previous].length + 1 > array[current].length) {
        array[current].length = array[previous].length + 1;
        array[current].previous = previous;
    }
};

const conditionMapper = (array, current, previous) => {
    return {
        assignDataIfBiggerCurrent: () => {
            if (input[current] > input[previous]) {
                assignDataIfLongerLength(array, current, previous)
            }
        },
        assignDataIfSmallerCurrent: () => {
            if (input[current] < input[previous]) {
                assignDataIfLongerLength(array, current, previous)
            }
        }
    }
};

const findLongestSubsequence = () => {
    for (let i = 0; i < input.length; i++) {
        firstConditionData[i] = { length: 1, previous: -1 };
        secondConditionData[i] = { length: 1, previous: -1 };

        for (let y = i - 1; y >= 0; y--) {
            if ((firstConditionData[y].length + 1) % 2) {
                conditionMapper(firstConditionData, i, y).assignDataIfBiggerCurrent();
            } else {
                conditionMapper(firstConditionData, i, y).assignDataIfSmallerCurrent();
            }

            if ((secondConditionData[y].length + 1) % 2) {
                conditionMapper(secondConditionData, i, y).assignDataIfSmallerCurrent();
            } else {
                conditionMapper(secondConditionData, i, y).assignDataIfBiggerCurrent();
            }
        }
    }
};

const getLongestSubsequence = () => {
    const firstLongestLength = firstConditionData.slice().sort((a, b) => b.length - a.length)[0].length;
    const secondLongestLength = secondConditionData.slice().sort((a, b) => b.length - a.length)[0].length;

    const result = [];

    let index = firstLongestLength > secondLongestLength 
        ? firstConditionData.findIndex(x => x.length == firstLongestLength)
        : secondConditionData.findIndex(x => x.length == secondLongestLength);
    
    let array = firstLongestLength > secondLongestLength ? firstConditionData : secondConditionData;
    
    while (index > -1) {
        result.push(input[index]);
        index = array[index].previous;
    }

    return result.reverse();
};

findLongestSubsequence();
console.log(getLongestSubsequence());