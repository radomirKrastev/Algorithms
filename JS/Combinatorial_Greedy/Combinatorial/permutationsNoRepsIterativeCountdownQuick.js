// The Countdown QuickPerm Algorithm:


// let a[] represent an arbitrary list of objects to permute
// let N equal the length of a[]
// create an integer array p[] of size N+1 to control the iteration     
// initialize p[0] to 0, p[1] to 1, p[2] to 2, ..., p[N] to N
// initialize index variable i to 1

const a = ['A', 'B', 'C'];

const isOdd = num => num % 2;
const swap = (x, y) => {
    const xValue = a[x];
    a[x] = a[y];
    a[y] = xValue;
};

const n = a.length;
const p = new Array(n + 1);

for (let i = 0; i < p.length; i++) {
    p[i] = i;
}

let i = 1;

let count = 1;

while (i < n) {
    console.log({a, count})
    count++
    //decrement p[i] by 1
    // console.log(1, {p, i})
    p[i]--;
    // console.log(2, {p, i})
    
    //if i is odd, then let j = p[i] otherwise let j = 0
    let j = isOdd(i) ? p[i] : 0;
    // console.log(3, {j})
    swap(j, i);
    // console.log(4, {a})
    i = 1;
    
    while (p[i] == 0) {
        // console.log(5,'loop', {p, i})
        p[i] = i;
        i++;
        // console.log(6,'loop', {p, i})
    }
};
// end while (p[i] is equal to 0)
// end while (i < N)