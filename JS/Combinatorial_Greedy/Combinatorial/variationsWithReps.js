const input = ['R', 'D', 'L', 'U'];

const arr = input;

const slots = 3;

const generate = (arr, variations, index) => {
    if (index >= variations.length) {
        console.log(variations.join(' '));
        return
    }

    for (let i = 0; i < arr.length; i++) {
        variations[index] = arr[i];
        generate(arr, variations, index + 1);
    }
};

generate(arr, new Array(slots), 0);
