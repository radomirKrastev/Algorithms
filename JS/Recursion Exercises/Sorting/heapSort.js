// const arr = [4, 10, 3, 5, 1];
// const arr = [4, 10, 3, 5, 1, 8, 5, 3, 9, 20, 25];
// const arr = [6, 1, 4, 3, 5, 7, 9, 2, 8, 0];
const arr = [2, 1, 3];

let a = 0;

const getLeftChildIndex = nodeIndex => nodeIndex * 2 + 1;
const getRightChildIndex = nodeIndex => nodeIndex * 2 + 2;

const heapify = (arr, nodeIndex) => {
    if (nodeIndex >= arr.length || getLeftChildIndex(nodeIndex) >= arr.length || getRightChildIndex(nodeIndex) >= arr.length) {
        return
    }

    heapify(arr, getLeftChildIndex(nodeIndex));
    heapify(arr, getRightChildIndex(nodeIndex));

    const largerChildIndex = arr[getLeftChildIndex(nodeIndex)] > arr[getRightChildIndex(nodeIndex)]
        ? getLeftChildIndex(nodeIndex)
        : getRightChildIndex(nodeIndex);

    const nodeValue = arr[nodeIndex];

    if (nodeValue < arr[largerChildIndex]) {
        arr[nodeIndex] = arr[largerChildIndex];
        arr[largerChildIndex] = nodeValue;

        heapify(arr, getLeftChildIndex(nodeIndex));
        heapify(arr, getRightChildIndex(nodeIndex));
    }

    return arr;
};

const heapSort = (arr) => {
    const sortedArray = new Array(arr.length);

    for (let i = sortedArray.length - 1; i >= 0; i--) {
        if (arr.length > 2) {
            arr = heapify(arr, 0);
        } else if (arr.length == 2) {
            if (arr[1] > arr[0]) {
                let zeroIndexValue = arr[0];
                arr[0] = arr[1];
                arr[1] = zeroIndexValue;
            }
        }
        const rootNode = arr[0];
        const lastChild = arr[arr.length - 1];
        sortedArray[i] = rootNode;

        arr[0] = lastChild;
        arr[arr.length - 1] = rootNode;
        arr.pop();
    }

    return sortedArray
};

console.log(heapSort(arr));