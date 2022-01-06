const computeFactorial = number => {
    if (number == 0) {
        return 1;
    }

    return number * computeFactorial(number - 1);
};

console.log(computeFactorial(12));


