// const input = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// const input = [1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3];
const input = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

const startTime = new Date();

input.sort();

const swap = (x, y) => {
    const xValue = input[x];
    input[x] = input[y];
    input[y] = xValue;
};

// const cube = {
//     topFront = input[0],
//     topLeft = input[1],
//     topBack = input[2],
//     topRight = input[3],

//     bottomFront = input[4],
//     bottomLeft = input[5],
//     bottomBack = input[6],
//     bottomRight = input[7],
    
//     frontLeft = input[8],
//     backLeft = input[9],
//     backRight = input[10],
//     frontRight = input[11],
// };

const rotateLeftSide = (cube) => {
    const newCube = [];
    newCube.push(cube[11]);
    newCube.push(cube[3]);
    newCube.push(cube[10]);
    newCube.push(cube[7]);

    newCube.push(cube[8]);
    newCube.push(cube[1]);
    newCube.push(cube[9]);
    newCube.push(cube[5]);

    newCube.push(cube[0]);
    newCube.push(cube[2]);
    newCube.push(cube[6]);
    newCube.push(cube[4]);

    return newCube.join('');
};

const rotateLeft = (cube) => {
    const newCube = [];
    newCube.push(cube[3]);
    newCube.push(cube[0]);
    newCube.push(cube[1]);
    newCube.push(cube[2]);

    newCube.push(cube[7]);
    newCube.push(cube[4]);
    newCube.push(cube[5]);
    newCube.push(cube[6]);

    newCube.push(cube[11]);
    newCube.push(cube[8]);
    newCube.push(cube[9]);
    newCube.push(cube[10]);

    return newCube.join('');
};

const rotateFront = (cube) => {
    const newCube = [];
    newCube.push(cube[2]);
    newCube.push(cube[9]);
    newCube.push(cube[6]);
    newCube.push(cube[10]);

    newCube.push(cube[0]);
    newCube.push(cube[8]);
    newCube.push(cube[4]);
    newCube.push(cube[11]);

    newCube.push(cube[1]);
    newCube.push(cube[5]);
    newCube.push(cube[7]);
    newCube.push(cube[3]);

    return newCube.join('');
};

const rotateBack = (cube) => {
    const newCube = [];
    newCube.push(cube[4]);
    newCube.push(cube[8]);
    newCube.push(cube[0]);
    newCube.push(cube[11]);

    newCube.push(cube[6]);
    newCube.push(cube[9]);
    newCube.push(cube[2]);
    newCube.push(cube[10]);

    newCube.push(cube[5]);
    newCube.push(cube[1]);
    newCube.push(cube[3]);
    newCube.push(cube[7]);

    return newCube.join('');
};

let totalUniqueCubes = 0;
const allCubes = new Set();


const permute = (arr, start, end) => {    
    let currentCube = input.join('');

    if(!allCubes.has(currentCube)) {        
        for (let i = 0; i < 4; i++) {       

            for (let y = 0; y < 4; y++) {
                currentCube = rotateLeft(currentCube);
                allCubes.add(currentCube);                
            }
            
            currentCube = rotateLeftSide(currentCube);
        }

        let frontRotatedCube = rotateFront(currentCube);

        for (let i = 0; i < 4; i++) {
            frontRotatedCube = rotateLeft(frontRotatedCube);
            allCubes.add(frontRotatedCube);                
        }

        let backRotatedCube = rotateBack(currentCube);

        for (let i = 0; i < 4; i++) {
            backRotatedCube = rotateLeft(backRotatedCube);
            allCubes.add(backRotatedCube);                
        }

        totalUniqueCubes += 1;
    }



    for (let left = end - 1; left >= start; left--) {
        for (let right = left + 1; right <= end; right++) {
            if(arr[left] !== arr[right]) {
                swap(left, right);
                permute(arr, left + 1, end);
            }            
        }
        
        const firstElement = arr[left];

        for (let i = left; i < end; i++) {
            arr[i] = arr[i + 1];            
        }

        arr[end] = firstElement;
    }
};

permute(input, 0, input.length - 1);

const endTime = new Date();

console.log(totalUniqueCubes);