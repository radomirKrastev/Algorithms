const draw = number => {
    if (number - 1 == 0) {
        return;
    }

    let arr1 = new Array(number - 1);

    arr1.fill('*');
    
    console.log(arr1.join(''))
    draw(number - 1);

    let arr2 = new Array(number - 1);
    arr2.fill('#');
    console.log(arr2.join(''))
    return
};

draw(5)


