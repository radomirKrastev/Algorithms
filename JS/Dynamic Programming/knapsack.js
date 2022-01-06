const capacity = 20;

// const items = [
//     { name: 'Light', weight: 2, value: 3 },
//     { name: 'Laptop', weight: 2, value: 1 },
//     { name: 'Book', weight: 1, value: 3 },
// ];
const items = [
    { name: 'Item1', weight: 5, value: 30 },
    { name: 'Item2', weight: 8, value: 120 },
    { name: 'Item3', weight: 7, value: 10 },
    { name: 'Item4', weight: 0, value: 20 },
    { name: 'Item5', weight: 4, value: 50 },
    { name: 'Item6', weight: 5, value: 80 },
    { name: 'Item7', weight: 2, value: 10 },
];

const valueWeightMatrix = [];
const itemsPickedMatrix = [];

for (let row = 0; row < items.length; row++) {
    valueWeightMatrix[row] = [];
    itemsPickedMatrix[row] = [];
    for (let col = 0; col <= capacity; col++) {
        valueWeightMatrix[row][col] = 0;
        itemsPickedMatrix[row][col] = false;
    }
}

const calculateMatrix = () => {
    for (let row = 0; row < items.length; row++) {
        const item = items[row];

        for (let col = 0; col <= capacity; col++) {
            if (row == 0) {
                if (item.weight <= col) {
                    valueWeightMatrix[row][col] = item.value;
                    itemsPickedMatrix[row][col] = true;
                }
            } else if (item.weight > col) {
                valueWeightMatrix[row][col] = valueWeightMatrix[row - 1][col];                
            } else if (item.value + valueWeightMatrix[row - 1][col - item.weight] > valueWeightMatrix[row - 1][col]) {
                valueWeightMatrix[row][col] = item.value + valueWeightMatrix[row - 1][col - item.weight];
                itemsPickedMatrix[row][col] = true;
            } else {
                valueWeightMatrix[row][col] = valueWeightMatrix[row - 1][col];
            }                       
        }
    }    
};

const getPickedItemsData = () => {
    const pickedItemsData = {
        items: [],
        totalValue: 0,
        totalWeight: 0,
    };

    let itemPlace = {};
    let breakLoop = false;

    for (let row = items.length - 1; row >= 0; row--) {
        for (let col = capacity; col >= 0; col--) {
            if(itemsPickedMatrix[row][col]) {
                pickedItemsData.items.push(items[row]);
                pickedItemsData.totalValue += items[row].value;
                pickedItemsData.totalWeight += items[row].weight;
                itemPlace = { row, col };
                breakLoop = true;
                break;
            }
            
            
        }
        
        if(breakLoop) {
            break;
        }        
    }
    
    while(itemPlace.row - 1 >= 0 && itemPlace.col >= 0) {
        const nextItemCol = itemPlace.col - pickedItemsData.items[pickedItemsData.items.length - 1].weight;
        
        for (let row = itemPlace.row - 1; row >= 0; row--) {
            itemPlace.row = row;
            if (itemsPickedMatrix[row][nextItemCol]) {
                itemPlace = { row, col: nextItemCol };
                pickedItemsData.items.push(items[row]);
                pickedItemsData.totalValue += items[row].value;
                pickedItemsData.totalWeight += items[row].weight;
                break;
            }
        }
    }

    return pickedItemsData;
}


calculateMatrix();
const data = getPickedItemsData();
console.log(data.totalWeight);
console.log(data.totalValue);
console.log(data.items.map(x => x.name).reverse());
