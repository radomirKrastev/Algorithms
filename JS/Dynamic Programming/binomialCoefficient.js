const n = 150;
const k = 7;

let triangle = [];

for (let i = 0; i <= n; i++) {
    triangle[i] = [];    
}

const binom = (n, k) => {
    if(triangle[n][k]) {
        return triangle[n][k];
    }
    
    if (k > n) {
        return 0;
    }
    
    if (k == 0 || k == n) {
        return 1;
    }
    
    const b = binom(n - 1, k - 1) + binom(n - 1, k);
    
    triangle[n][k] = b;

    return b;
};

const b = binom(n, k);

console.log(triangle)
console.log(b);