let n = 3;
let k = 3;

const arr = new Array(k).fill(1);

const combine = (arr, index) => {
    console.log(arr.join(' '));
    
    if (arr[0] == n) {
        return;
    }

    if (arr[index] == n) {
        let previousIndex = index - 1;
        
        while(previousIndex >= 0) {
            if(arr[previousIndex] == n) {
                previousIndex = previousIndex - 1; 
            } else {
                arr[previousIndex] = arr[previousIndex] + 1;
                
                for (let i = previousIndex; i < arr.length; i++) {
                    arr[i] = arr[previousIndex];
                }

                break;
            }
        }
    } else {
        arr[index] = arr[index] + 1;
    }

    combine(arr, index); 
};

combine(arr, arr.length - 1);
