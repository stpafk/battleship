
module.exports = Ship;

function Ship(length) {
    let hits = 0;
    let sunk = false;

    function hit() {
        hits ++;
        if (hits === length) {
            sunk = true;
        }
    }

    function isSunk() {
        return sunk;
    }

    return {
        hit,
        isSunk
    }
}