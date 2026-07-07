var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (
        target < matrix[0][0] ||
        target > matrix[rows - 1][cols - 1]
    ) {
        return false;
    }

    for (let i = 0; i < rows; i++) {
        if (
            matrix[i][0] <= target &&
            matrix[i][cols - 1] >= target
        ) {
            return matrix[i].includes(target);
        }
    }

    return false;
};