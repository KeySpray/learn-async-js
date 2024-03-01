function sum2DArray(row) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(row)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < row.length; i++) {
                    if (row[i] <= 0) {

                    }
                }
            }
        }


Promise.any(negsPerRowPromises)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => console.log(`Err msg: ${error}`));
}}
        

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
