const pow = (x, n) => {
    console.log(n)
    if ( n == 1) {
        return x
    } 
    
    return x * pow(x, n - 1);
};

console.log(pow(2, 3))