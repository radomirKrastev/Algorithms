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

let graph = {
    'First': ['Second'],
    'Second': ['First'],
};

//my initial approach

// const findNoPredecessorsNode = () => {
//     let graphNodes = Object.keys(graph);
//     let node = '';

//     for (let nodeIndex = 0; nodeIndex < graphNodes.length; nodeIndex++) {
//         let hasParent = false;

//         for (let i = 0; i < graphNodes.length; i++) {
//             if(graph[graphNodes[i]].includes(graphNodes[nodeIndex])) {
//                 hasParent = true;
//                 break;
//             }            
//         }

//         if(!hasParent) {
//             node = graphNodes[nodeIndex];
//             break;
//         }
//     }

//     if(!node) {
//         throw new Error('cycle detected')
//     }

//     return node;
// };

// const topologicalSort = () => {
//     let sortedNodes = [];

//     while(Object.keys(graph).length > 0) {
//         const node = findNoPredecessorsNode();
//         sortedNodes.push(node);
//         delete graph[node];
//     }

//     return sortedNodes;
// };




// my second approach

// let graphNodes = Object.keys(graph);
// let sortedNodes = [];
// let nodesWithParents = [];

// for (let i = 0; i < graphNodes.length; i++) {
//     const node = graphNodes[i];
//     nodesWithParents = [...new Set([...nodesWithParents, ...graph[node]])];
// }

// let nodesWithoutParents = graphNodes.filter(x => !nodesWithParents.includes(x));

// const sortNodes = (node) => {
//     if(nodesWithParents.includes(node) || sortedNodes.includes(node)) {
//         return;
//     } else {
//         sortedNodes.push(node);
//         const children = graph[node];
//         graph[node] = [];

//         nodesWithParents = [];
//         for (let i = 0; i < graphNodes.length; i++) {
//             const node = graphNodes[i];
//             nodesWithParents = [...new Set([...nodesWithParents, ...graph[node]])];
//         }
        
//         children.forEach(child => {
//             sortNodes(child);
//         });
//     }
// };

// for (let i = 0; i < nodesWithoutParents.length; i++) {
//     sortNodes(nodesWithoutParents[i]);    
// }

// if(nodesWithParents.length > 0) {
//     throw new Error('there is a cycle')
// }

// console.log(sortedNodes);




//my third approach

let sortedNodes = [];
let graphNodes = Object.keys(graph);

const findNodesWithParents = () => {
    let nodesWithParents = [];
    
    for (let i = 0; i < graphNodes.length; i++) {
        const node = graphNodes[i];
        nodesWithParents = [...new Set([...nodesWithParents, ...graph[node]])];
    }

    return nodesWithParents;
};

let nodesWithParents = findNodesWithParents();

let nodesWithoutParents = graphNodes.filter(x => !nodesWithParents.includes(x));

while(nodesWithoutParents.length > 0) {
    const node = nodesWithoutParents[0];
    nodesWithoutParents.shift();
    sortedNodes.push(node);
    const children = graph[node]; 
    graph[node] = [];
    
    let nodesWithParents = findNodesWithParents();
    
    children.forEach(child => {
        if(!nodesWithParents.includes(child)) {
            nodesWithoutParents.push(child);
        }
    });
}

console.log(sortedNodes);
console.log(nodesWithParents);


console.log(topologicalSort())

