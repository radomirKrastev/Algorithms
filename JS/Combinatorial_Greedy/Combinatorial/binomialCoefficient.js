const n = 49;
const k = 6;

const binom = (n, k) => {
    if (k > n) {
        return 0;
    }

    if (k == 0 || k == n) {
        return 1;
    }

    return binom(n - 1, k - 1) + binom(n - 1, k);
};

const b = binom(n, k);

console.log(b);

//This is a slow algorithm because we are solving the same problem multiple times
//After the DP lectures a more efficient solution should be implemented