function asyncSum(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            resolve(sum);
        }, Math.floor(Math.random() * 1000));
    });
}

function sum2DArrayAsync(twoDArray) {
    const rowSumsPromise = twoDArray.map(row => asyncSum(row));
    
    return Promise.all(rowSumsPromise)
        .then(rowSums => {
            let totalSum = 0;
            for (let sum of rowSums) {
                totalSum += sum;
            }
            return totalSum;
        });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayAsync(array2D).then(totalSum => {
    console.log(`Total Sum: ${totalSum}`);
});
