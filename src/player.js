import Ship from "./ship";

const Player = (type = 'human') => {

    const fleet = createFleet()
    const getType = () => type;
    const getFleet = () => fleet;
    const resetFleet = () => ( fleet = createFleet() )

    const createFleet = () => {

        const type = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Carrier"];
        const fleet = {};
    
        type.forEach((boat) => (fleet[boat] = Ship(boat)));
    
        return fleet;
    
    }

    function attack(x, y, gameboard) {
        gameboard.receiveAttack(x, y);
    }

    function randomPlay(gameboard) {
        
        let rowRandNumber = Math.floor(Math.random()*10);
        let columnRandNumber = Math.floor(Math.random()*10);

        const hit = gameboard.getBoard()[rowRandNumber, columnRandNumber];

        if (hit === "miss" || hit === "hit") {
            randomPlay(gameboard);
        } else {
            gameboard.receiveAttack(rowRandNumber, columnRandNumber);
        }
    }

    return {attack, getFleet, getType, randomPlay, resetFleet}

}

export default Player;