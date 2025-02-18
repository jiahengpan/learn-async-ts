
/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
            return; 
        }
        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(`Adding ${arr[i][j]} to sum`);
                sum += arr[i][j];
            }
        }
        resolve(sum);
        console.log('returning from sum');
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArray(array2D)
    .then(result => console.log('sumPromise1 result:', result))
    .catch(error => console.log('sumPromise1 error:', error));

sum2DArray([])
    .then(result => console.log('sumPromise2 result:', result))
    .catch(error => console.log('sumPromise2 error:', error));


