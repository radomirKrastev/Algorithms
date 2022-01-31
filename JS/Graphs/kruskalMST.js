const edges = [
    { startNode: 0, endNode: 3, weight: 9 },
    { startNode: 0, endNode: 5, weight: 4 },
    { startNode: 0, endNode: 8, weight: 5 },
    { startNode: 1, endNode: 4, weight: 8 },
    { startNode: 1, endNode: 7, weight: 7 },
    { startNode: 2, endNode: 6, weight: 12 },
    { startNode: 3, endNode: 5, weight: 2 },
    { startNode: 3, endNode: 6, weight: 8 },
    { startNode: 3, endNode: 8, weight: 20 },
    { startNode: 4, endNode: 7, weight: 10 },
    { startNode: 6, endNode: 8, weight: 7 },
];

const sortedEdges = edges.sort((a, b) => a.weight - b.weight);

const nodesForest = [...new Set([...sortedEdges.map(x => x.startNode), ...sortedEdges.map(x => x.endNode)])];

const MST = [];
let parentsNodes = [];

for (let i = 0; i < nodesForest.length; i++) {
    parentsNodes.push(i);
}

const getNodeRoot = (node) => {
    let root = node;

    while(root != parentsNodes[root]) {
        root = parentsNodes[root];
    }

    return root;
};

while(sortedEdges.length > 0) {
    const edge = sortedEdges.shift();

    const startNodeRoot = getNodeRoot(edge.startNode); 
    const endNodeRoot = getNodeRoot(edge.endNode); 

    if(startNodeRoot != endNodeRoot) {
        MST.push(edge);

        parentsNodes[endNodeRoot] = startNodeRoot;
    }
}

console.log(MST)
