// const input = '43/48';
// const input = '3/7';
// const input = '23/46';
// const input = '22/7';
const input = '134/3151';

const parts = input.split('/');
const numerator = Number(parts[0]);
const denominator = Number(parts[1]);

if (numerator >= denominator) {
    throw new Error('fraction is equal to or greater than 1');
}

//Recursive

const findEgyptianFraction = (numerator, denominator, fractions, index) => {    
    if (numerator == 0) {
        console.log(`${input} = ${fractions.join(' + ')}`);
        return;
    }

    if (denominator % numerator == 0) {
        console.log(`${input} = ${fractions.join(' + ')} + 1/${denominator / numerator}`);
        return;
    }
    
    const nextNumerator = numerator * index;
    const nextDenominator = denominator * index;
    const indexNumerator = 1 * denominator;
    
    if (nextNumerator - indexNumerator >= 0) {        
        fractions.push(`1/${index}`);
        findEgyptianFraction(nextNumerator - indexNumerator, nextDenominator, fractions, index + 1);
    } else {
        findEgyptianFraction(numerator, denominator, fractions, index + 1);
    }
};

//With Loop

// const findEgyptianFraction = (numerator, denominator) => {
//     let index = 2;
//     let fractions = [];

//     while (numerator != 0) {
//         const nextNumerator = numerator * index;
//         const nextDenominator = denominator * index;
//         const indexNumerator = 1 * denominator;

//         if (nextNumerator - indexNumerator >= 0) {
//             fractions.push(`1/${index}`);
//             numerator = nextNumerator - indexNumerator;
//             denominator = nextDenominator;
//         }

//         index++;
//     }

//     console.log(`${input} = ${fractions.join(' + ')}`);
// };

findEgyptianFraction(numerator, denominator, [], 2);
