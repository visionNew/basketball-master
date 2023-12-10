function trimString(string) {
    return string.trim();
}

function splitData(string) {
    return string.split(/(\r\n|\r|\n)/g).filter((row) => row.trim().length !== 0).map(trimString);
}

function formatDataMatrix(array) {
    return array.map((row) => row.split(",").map(trimString));
}

function findInvalidRows(matrix) {
    return matrix.map((row, index) => (row.length !== 4 ? index + 1 : null)).filter((error) => error !== null);
}

export { splitData, formatDataMatrix, findInvalidRows };