function trimString(string) {
    return string.trim();
}

function splitData(string) {
    return string.split(/(\r\n|\r|\n)/g);
}

function formatDataMatrix(array) {
    return array
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(",").map(trimString));
}

export { splitData, formatDataMatrix };