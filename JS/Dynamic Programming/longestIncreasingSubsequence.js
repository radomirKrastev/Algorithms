// const sequence = [1, 2, 5, 3, 4];
// const sequence = [4, 3, 2, 1];
const sequence = [4, 2, -1, 3, 5, 5];
// const sequence = [3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1];

const increasingSequencesCount = new Array(sequence.length).fill(1);
const previousIndices = new Array(sequence.length).fill(-1);

let longestSubsequenceCount = 1;

const populateLongestIncreasingSubsequenceData = () => {
    for (let i = sequence.length - 1; i >= 0; i--) {
        if (i == sequence.length - 1) {
            increasingSequencesCount[i] = 1;
        }

        for (let y = sequence.length - 1; y > i; y--) {
            if(sequence[i] < sequence[y] && increasingSequencesCount[i] <= 1 + increasingSequencesCount[y]) {
                increasingSequencesCount[i] = 1 + increasingSequencesCount[y];
                previousIndices[i] = y;

                if(increasingSequencesCount[i] > longestSubsequenceCount) {
                    longestSubsequenceCount = increasingSequencesCount[i];
                }
            }
        }
    }
};

const printSolution = () => {
    let index = increasingSequencesCount.findIndex(x => x == longestSubsequenceCount);
    
    const result = [];

    while(index > -1) {
        result.push(sequence[index]);
        index = previousIndices[index];
    }

    console.log(result.join(' '));
};

populateLongestIncreasingSubsequenceData();
printSolution();
