
module.exports = Ship;

function Ship(length) {
    let hits = 0;
    let sunk = false;

    function hit() {
        hits++;
        if (hits === length) {
            sunk = true;
        }
    }

    function isSunk() {
        return sunk;
    }

    function getHits() {
        return hits
    }

    return {
        hit,
        isSunk,
        getHits
    }
}