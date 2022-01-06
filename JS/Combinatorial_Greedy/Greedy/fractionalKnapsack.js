// const capacity = 16;
// const items = [
//     {price: 25, weight: 10},
//     {price: 12, weight: 8},
//     {price: 16, weight: 8},
// ];
// const capacity = 13;
// const items = [
//     {price: 13, weight: 7},
//     {price: 15, weight: 7},
// ];
// const capacity = 22;
// const items = [
//     {price: 50, weight: 25},
//     {price: 34, weight: 25},
//     {price: 41, weight: 25},
//     {price: 3, weight: 25},
// ];
// const capacity = 134;
// const items = [
//     {price: 12, weight: 14},
//     {price: 45, weight: 54},
//     {price: 98, weight: 78},
//     {price: 21, weight: 51},
//     {price: 64, weight: 11},
//     {price: 90, weight: 117},
//     {price: 33, weight: 17},
//     {price: 64, weight: 23},
//     {price: 7, weight: 3},
// ];
const capacity = 10;
const items = [
    {price: 25, weight: 5},
];

items.sort((a, b) => (b.price / b.weight) - (a.price / a.weight));

const solve = () => {
    let currentCapacity = capacity;
    let totalPrice = 0;
    let itemsPicked = [];
    
    let index = 0;
    while(currentCapacity != 0) {
        if(index >= items.length) {
            break;
        }
        console.log({currentCapacity});
        if((currentCapacity / items[index].weight) >= 1) {
            itemsPicked.push({...items[index], portion: '100%'});
            totalPrice += items[index].price;
            currentCapacity -= items[index].weight;
        } else {
            const portion = (currentCapacity / items[index].weight);
            itemsPicked.push({...items[index], portion: `${portion * 100}%`});
            totalPrice += items[index].price * portion;
            currentCapacity -= items[index].weight * portion;
        }

        index++
    }
    
    
    console.log({currentCapacity});
    console.log({totalPrice});
    console.log({itemsPicked});
};

solve();
