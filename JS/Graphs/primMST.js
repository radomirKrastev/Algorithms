const MinHeap = { siftDown(h, i = 0, v = h[i]) { if (i < h.length) { let k = v[0]; while (1) { let j = i * 2 + 1; if (j + 1 < h.length && h[j][0] > h[j + 1][0]) j++; if (j >= h.length || k <= h[j][0]) break; h[i] = h[j]; i = j; } h[i] = v } }, heapify(h) { for (let i = h.length >> 1; i--;)this.siftDown(h, i); return h }, pop(h) { return this.exchange(h, h.pop()) }, exchange(h, v) { if (!h.length) return v; let w = h[0]; this.siftDown(h, 0, v); return w }, push(h, v) { let k = v[0], i = h.length, j; while ((j = (i - 1) >> 1) >= 0 && k < h[j][0]) { h[i] = h[j]; i = j } h[i] = v; return h } };

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

let allNodes = [];

for (let i = 0; i < edges.length; i++) {
    allNodes = [...new Set([...allNodes, edges[i].startNode, edges[i].endNode])];
}

const spanningTreeNodes = [];
const MST = [];

const findEdges = (node) => edges.filter(x => x.startNode == node || x.endNode == node);

const knownEdges = [];

const pushInHeap = (node, heap) => {
    const nodeEdges = findEdges(node);

    nodeEdges.forEach(x => {
        if (!knownEdges.find(y => y.weight == x.weight && y.startNode == x.startNode && y.endNode == x.endNode)) {
            knownEdges.push({ weight: x.weight, startNode: x.startNode, endNode: x.endNode });
            
            MinHeap.push(heap, [x.weight, x.startNode, x.endNode]);
        }
    });
}

const prim = (node) => {
    const heap = [];
    pushInHeap(node, heap);

    while (heap.length > 0) {
        const [weight, startNode, endNode] = MinHeap.pop(heap);

        let nonTreeNode = -1;

        if (spanningTreeNodes.includes(startNode) && !spanningTreeNodes.includes(endNode)) {
            nonTreeNode = endNode;
        }

        if (spanningTreeNodes.includes(endNode) && !spanningTreeNodes.includes(startNode)) {
            nonTreeNode = startNode;
        }

        if (nonTreeNode > -1) {
            MST.push({ startNode, endNode, weight });
            pushInHeap(nonTreeNode, heap);
            spanningTreeNodes.push(nonTreeNode);
        }
    }
};

for (let i = 0; i < allNodes.length; i++) {
    let node = allNodes[i];

    if (!spanningTreeNodes.includes(node)) {
        spanningTreeNodes.push(node);
        prim(node);
    }
}

console.log(MST);