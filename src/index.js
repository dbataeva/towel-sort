

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }

    matrix.forEach((elem, index) => {
        if (index % 2) {
            elem.sort((a, b) => b - a);
        } else {
            elem.sort((a, b) => a - b);
        }
    });

    return matrix.join().split(',').map(elem => +elem);
}
