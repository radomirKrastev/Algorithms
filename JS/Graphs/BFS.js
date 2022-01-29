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

const lines = 4;

const graph = [
    [1, 2, 3],
    [0, 1, 2, 3, 3],
    [0, 1, 3],
    [0, 1, 1, 2],
];

const nodes = [];
let visited = [];

const BFS = (node) => {
    const queue = [];

    queue.push(node);
    
    while(queue.length  > 0) {
        const v = queue.shift();
        visited[v] = true
        nodes.push(v);
        
        const children = graph[v];
        
        children.forEach(child => {
            if(!visited[child]) {
                visited[child] = true;
                queue.push(child);
            }
        })
    }
};

for (let i = 0; i < graph.length; i++) {
    if(!visited[i]) {
        BFS(i);
    }
}

console.log(nodes)