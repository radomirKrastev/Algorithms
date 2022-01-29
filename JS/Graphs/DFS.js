// const lines = 9;

// const graph = [
//     [3, 6],
//     [3, 4, 5, 6],
//     [8],
//     [0, 1, 5],
//     [1, 6],
//     [1, 3],
//     [0, 1, 4],
//     [],
//     [2]
// ];

// const lines = 1;

// const graph = [
//     [0]
// ];

// const lines = 7;

// const graph = [
//     [],
//     [2, 6],
//     [1],
//     [4],
//     [3],
//     [],
//     [1],
// ];

// const lines = 4;

// const graph = [
//     [1, 2, 3],
//     [0, 1, 2, 3, 3],
//     [0, 1, 3],
//     [0, 1, 1, 2],
// ];

const lines = 5;

const graph = [
    [1, 2],
    [3, 4],
    [5],
    [2, 5],
    [3],
    [],
];

const completedNodes = new Array(lines).fill(false);

let stack = [];

const dfs = (node) => {
    if (!completedNodes[node]) {
        completedNodes[node] = true;

        for (let i = 0; i < graph[node].length; i++) {
            dfs(graph[node][i]);
        }

        stack.push(node);
    }
};

for (let i = 0; i < graph.length; i++) {
    if (!completedNodes[i]) {
        dfs(i);
        console.log(`Connected component: ${stack.join(' ')}`);
        stack = [];
    }
}
