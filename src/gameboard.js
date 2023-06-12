
module.exports = gameBoard;

function gameBoard() {
    
    let grid = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    
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
                grid[row + i][column] = ship;
            }
        } else {
            
            for (let i = 0; i < shipLength; i++)
                grid[row][column + i] = ship; 
            
        }
    }

    function receiveAttack(x, y) {

        if (grid[x][y] === "Attacked") {
            return;
        } else {
            grid[x][y] = "Attacked";
        }
    }

    return {
        placeShip,
        receiveAttack
    }


}