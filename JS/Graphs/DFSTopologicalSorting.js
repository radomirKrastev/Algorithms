// let graph = {
//     A: ['B', 'C'],
//     B: ['D', 'E'],
//     C: ['F'],
//     D: ['C', 'F'],
//     E: ['D'],
//     F: [],
// };

// let graph = {
//     'IDEs': ['variables', 'loops'],
//     'variables': ['conditionals', 'loops', 'bits'],
//     'conditionals': ['loops'],
//     'loops': ['bits'],
//     'bits': [],
// };

// let graph = {
//     '5': ['11'],
//     '7': ['11', '8'],
//     '8': ['9'],
//     '11': ['9', '10', '2'],
//     '9': [],
//     '3': ['8', '10'],
//     '2': [],
//     '10': [],
// };

// const graph = {
//     '0': ['3', '6'],
//     '1': ['3', '4', '5', '6'],
//     '2': ['8'],
//     '3': ['0', '1', '5'],
//     '4': ['1', '6'],
//     '5': ['1', '3'],
//     '6': ['0', '1', '4'],
//     '7': [],
//     '8': ['2']
// };

let graph = {
    'First': ['Second'],
    'Second': ['First'],
};

let visitedNode = [];
let nodes = [];
const graphNodes = Object.keys(graph);

let cycleNodes = [];

const DFSSort = (nodeIndex) => {
    const node = graphNodes[nodeIndex];

    if(cycleNodes.includes(node)) {
        throw new Error('Cycle detected')
    }

    if (!visitedNode[nodeIndex]) {
        visitedNode[nodeIndex] = true;

        cycleNodes.push(node);

        const children = graph[node];

        children.forEach(child => {
            const nodeIndex = graphNodes.indexOf(child);
            DFSSort(nodeIndex);
        });

        cycleNodes.pop();
        nodes.unshift(node);
    }
};


for (let i = 0; i < graphNodes.length; i++) {
    const nodeIndex = i;
    DFSSort(nodeIndex);
}

console.log(nodes.join(' '));