
/**
 * Checks if a row contains any negative numbers asynchronously
 * @param row Array of numbers
 * @param rowIndex Index of the row in the 2D array
 * @returns Promise resolving to the row and its index if it contains negatives, null otherwise
 */
function checkRowForNegatives(row: number[], rowIndex: number): Promise<{row: number[], index: number} | null> {
    return new Promise((resolve) => {
        const hasNegative = row.some(num => num < 0);
        resolve(hasNegative ? {row, index: rowIndex} : null);
    });
}

/**
 * Finds all rows containing negative numbers using concurrent processing
 * @param arr 2D array of numbers
 * @returns Promise resolving to array of rows with negatives
 */
function findNegativeRowsConcurrent(arr: number[][]): Promise<{row: number[], index: number}[]> {
    if (arr.length === 0) {
        return Promise.resolve([]);
    }

    const rowPromises = arr.map((row, index) => 
        checkRowForNegatives(row, index)
    );

    return Promise.all(rowPromises)
        .then(results => results.filter((result): result is {row: number[], index: number} => 
            result !== null
        ));
}
// const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

const array2D_neg = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, -9],
    [-1, 2, 3]
];

// Test the negative number finder
console.log('Starting negative number search...');
findNegativeRowsConcurrent(array2D_neg)
    .then(rows => {
        console.log('Rows with negative numbers:');
        rows.forEach(({row, index}) => {
            console.log(`Row ${index}:`, row);
        });
    })
    .catch(error => console.error('Error:', error));