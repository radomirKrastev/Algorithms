const input = ['A', 'B', 'C', 'D'];
let arr = [...input];

const arrayOfPermutations = [];

let index = arr.length - 1;

const swap = (x, y) => {
    const xValue = arr[x];
    arr[x] = arr[y];
    arr[y] = xValue;
};

const permute = () => {
    console.log(arr)

    while (index > 0) {

        swap(index, index - 1);

        const i = index + 1;

        while(i < arr.length) {
            swap(i, i - 1);
            
            for (let i = arr.length - 1; i > 0; i--) {
                swap(i, i - 1);
                console.log(arr)
            }


            i++;
        }
    }

    for (let i = arr.length - 1; i > 0; i--) {
        swap(i, i - 1);
        console.log(arr)
    }

    arr = [...input];
    console.log(arr)

    // while (index > 0) {
    //     console.log('loop')
    //     const ind = index - 1;

    //     swap(index, index - 1);


    //     if (index < arr.length - 1) {

    //     }

    //     index--;


    //     // for (let i = arr.length - 1; i > 0; i--) {
    //     //     console.log(arr)
    //     //     swap(i, i - 1);
    //     // }

    //     console.log(arr)
    //     // arr = [...input];
    // };
};

permute();

