
const gameBoard = () => {
    
    let board = Array(10).fill(null).map(() => Array(10).fill(null));

    function getBoard() { return board };
    
    const missedAttacks = [];

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
                board[row + i][column] = {ship, index: i};
                //ship.position.push([row + i, column])
            }
        } else {
            
            for (let i = 0; i < shipLength; i++)
                board[row][column + i] = {ship, index: i}; 
                //ship.position.push([row, column + i])
            
        }

        placedShips.push(ship);

    }

    function receiveAttack(x, y) {

        if (grid[x][y] === null) {
            grid[x][y] === "miss";
            return;
        } else if (board[x][y].ship) {
            board[x][y].hit(board[x][y].index);
            grid[x][y] = "Attacked";

        }
        return board[x][y];
    }

    return {
        getBoard,
        placeShip,
        receiveAttack
    }

}

module.exports = gameBoard;