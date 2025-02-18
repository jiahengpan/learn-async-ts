/**
 * Computes the sum of a single row asynchronously
 * @param row Array of numbers
 * @returns Promise resolving to the sum of the row
 */
async function sumRow(row: number[]): Promise<number> {
    return row.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Computes the sum of a 2D array using concurrent processing
 * @param arr 2D array of numbers
 * @returns Promise resolving to the total sum
 */
async function sumConcurrent2DArray(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        throw new Error('Cannot sum an empty array');
    }

    const rowSums = await Promise.all(arr.map(row => sumRow(row)));
    
    return rowSums.reduce((acc, curr) => acc + curr, 0);
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function main() {
    try {
        console.log('Starting concurrent sum...');
        const result = await sumConcurrent2DArray(array2D_1);
        console.log('Total sum:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();