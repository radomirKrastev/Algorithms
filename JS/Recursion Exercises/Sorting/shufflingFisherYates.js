// let array = [105, 137, 334, 464, 570, 724, 749, 763];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getRandomInt = max => Math.floor(Math.random() * max);

const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {  
        const randomIndex = getRandomInt(arr.length);
        const randomNumber = arr[randomIndex];
        
        arr[randomIndex] = arr[i];
        arr[i] = randomNumber;
    }
};

console.log(array);
shuffle(array);
console.log(array);