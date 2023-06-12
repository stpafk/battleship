
module.exports = gameBoard;

const gameBoard = () => {
    
    let board = Array(10).fill(null).map(() => Array(10).fill(null));

    function getBoard() { return board };
    
    const placedShips = []

    
    function placeShip(ship, direction, row, column) {

        let shipLength = 0;

        switch(ship) {
            case "Destroyer": 
                shipLength = 2
                break;
            case "Submarine":
                shipLength = 3;
                break;
            case "Cruiser": 
                shipLength = 3;
                break;
            case "Battleship":
                shipLength = 4;
                break;
            case "Carrier":
                shipLength = 5;
                break;
        }

        if (direction === "vertical") {

            for (let i = 0; i < shipLength; i++) {
                grid[row + i][column] = true;
            }
        } else {
            
            for (let i = 0; i < shipLength; i++)
                grid[row][column + i] = true; 
            
        }

        placedShips.push(ship);

    }

    function receiveAttack(x, y) {

        if (grid[x][y] === "Attacked") {
            return;
        } else {
            grid[x][y] = "Attacked";
        }
    }

    return {
        getBoard,
        placeShip,
        receiveAttack
    }


}