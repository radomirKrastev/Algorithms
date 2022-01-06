const input = ['A', 'B', 'C'];

const arr = input.map(x => x = { value: x, isUsed: false });

const generate = (arr, variations, index) => {
    if (index >= variations.length) {
        console.log(variations.join(' '));
        return
    }
    
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i].isUsed) {
            variations[index] = arr[i].value;
            arr[i].isUsed = true;
            generate(arr, variations, index + 1);
            arr[i].isUsed = false;
        }        
    }
};


generate(arr, new Array(2), 0);
