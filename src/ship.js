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

    const id = type;
    const shipLength = shipData(type);
    let direction = 'horizontal';
    const hits = Array(shipLength).fill(null);
    
    /** Hit function takes the index from DOM
    * @param  {index} index taken from DOM directed to the ship*/
    const hit = (index) => (hits[index] = 'hit');
    /** Non-parameter function that checks if all ship has been hit*/
    const isSunk = () => hits.every((hit_) => hit_ === "hit");
    /** Non-parameter function that returns the hits taken by the ship */
    const getHits = () => hits;
    const getDirection = () => direction;
    const changeDirection = () => {
        direction === 'horizontal' ? (direction = "vertical") : (direction = 'horizontal');
    }

    return {changeDirection, getDirection, getHits, hit, hits, id, isSunk, shipLength}
}

module.exports = Ship;