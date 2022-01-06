const input = ['A', 'B', 'C'];

const source = input.map(x => x = { c: x, marked: false });

const permute = (output, source, index) => {
    
    if (index >= source.length) {
        console.log(output.join(' '));
        return;
    }
    
    for (let i = 0; i < source.length; i++) {
        if (source[i].marked == false) {
            output[index] = source[i].c; 
            source[i].marked = true;
            permute(output, source, index + 1);
            source[i].marked = false;
        }
    }
};

const output = new Array(input.length);

permute(output, source, 0);
