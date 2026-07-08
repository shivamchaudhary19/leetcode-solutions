/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {

    let row = matrix.length;
    let column = matrix[0].length;

    let newArr = [];
    let finalArr = [];

    let c = 0;
    let i = row - 1;

    while (true) {

        if (i === 0 && c !== column - 1) {

            newArr.push(matrix[i][c]);
            finalArr.push(newArr);

            newArr = [];

            c++;
            i = row - 1;

        }
        else if (i === 0 && c === column - 1) {

            newArr.push(matrix[i][c]);
            finalArr.push(newArr);

            break;
        }
        else {

            newArr.push(matrix[i][c]);
            i--;

        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            matrix[i][j] = finalArr[i][j];
        }
    }
};

// Here's better way to solve it using transpose. It also ignores declaring so much unnecessary variables.

/**
 * @param {number[][]} matrix
 * @return {void}
 */
var rotate = function(matrix) {

    const n = matrix.length;

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];

        }
    }

    // Step 2: Reverse every row
    for (let i = 0; i < n; i++) {

        matrix[i].reverse();

    }

};