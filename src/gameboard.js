
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

    

    function placeShip(shipLength, direction, row, column) {

        if (direction === "vertical") {

            for (let i = 0; i < shipLength; i++) {
                grid[row + i][column] = "~";
            }
        } else {
            
            for (let i = 0; i < shipLength; i++)
            grid[row][column + i] = "~"; 
            
        }


    }

    return {
        placeShip
    }


}