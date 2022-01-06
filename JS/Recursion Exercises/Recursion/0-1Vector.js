const generate = (arr, i) => {
    if (i == arr.length) {
        console.log(arr.join(''))
        return;
    }

    for (let y = 0; y <= 1; y++) {
        arr[i] = y;
        generate(arr, i + 1);         
    }
};


let val = 'x';
let array = new Array(8);
array.fill(val);


generate(array, 0);



