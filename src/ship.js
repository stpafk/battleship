
module.exports = Ship;

function shipData(type) {

    let len = 0;

    switch(type) {
        case "Destroyer": 
            len = 2
            break;
        case "Submarine":
            len = 3;
            break;
        case "Cruiser": 
            len = 3;
            break;
        case "Battleship":
            len = 4;
            break;
        case "Carrier":
            len = 5;
            break;
    }

    return len;
}

const Ship = (type) => {

    let id = type;
    let length = shipData(type);
    

    const hits = Array(length).fill(null);

    function hit(index) {
        hits[index] = 'hit';
    }

    function isSunk() {
        return hits.every((hit_) => hit_ === "hit");
    }

    function getHits() {
        return hits;
    }

    return {
        hit,
        isSunk,
        getHits
    }
}