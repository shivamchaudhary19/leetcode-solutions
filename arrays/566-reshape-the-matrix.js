
var matrixReshape = function(mat, r, c) {
    const oldRows = mat.length;
    const oldCols = mat[0].length;
    let newArr = [];
    let Row = [];

    if (oldRows * oldCols !== r * c) {
        return mat;
    }

    for (let i = 0 ; i < oldRows ; i++){
        for (let j = 0 ; j < oldCols ; j++){
            Row.push(mat[i][j]);
            if (Row.length === c){
                newArr.push(Row);
                Row = [];
            } 
        }
    } return newArr;
};