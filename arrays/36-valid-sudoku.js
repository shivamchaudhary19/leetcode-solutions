
var isValidSudoku = function(board) {

    let seen = new Set();

    // ===== Check Row By Row =====
    for (let i = 0; i < 9; i++) {

        seen.clear();

        for (let j = 0; j < 9; j++) {

            if (board[i][j] === ".") continue;

            else if (seen.has(board[i][j])) {
                return false;
            }

            seen.add(board[i][j]);
        }
    }

    // ===== Checking Column By Column =====
    for (let j = 0; j < 9; j++) {

        seen.clear();

        for (let i = 0; i < 9; i++) {

            if (board[i][j] === ".") continue;

            if (seen.has(board[i][j])) {
                return false;
            }

            seen.add(board[i][j]);
        }
    }

    // ===== Checking all 3 × 3 Boxes =====
    for (let rowStart = 0; rowStart < 9; rowStart += 3) {

        for (let colStart = 0; colStart < 9; colStart += 3) {

            seen.clear();

            for (let i = rowStart; i < rowStart + 3; i++) {

                for (let j = colStart; j < colStart + 3; j++) {

                    if (board[i][j] === ".") continue;

                    if (seen.has(board[i][j])) {
                        return false;
                    }

                    seen.add(board[i][j]);
                }
            }
        }
    }

    return true;
};