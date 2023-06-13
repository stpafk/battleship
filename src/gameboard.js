
const Gameboard = () => {
    
    let board = Array(10).fill(null).map(() => Array(10).fill(null));
    const missedAttacks = [];
    const placedShips = [];

    function getBoard() { return board };

    function placeShip(ship, direction, row, column) {

        if (direction === "vertical") {
            for (let i = 0; i < ship.length; i++) {
                board[row + i][column] = {ship, index: i};
                //ship.position.push([row + i, column])
            }
        } else {
            for (let i = 0; i < ship.length; i++)
                board[row][column + i] = {ship, index: i}; 
                //ship.position.push([row, column + i])
            
        }

        placedShips.push(ship);

    }

    function receiveAttack(x, y) {

        if (board[x][y] === null) {
            board[x][y] = "miss";

        } else if (board[x][y].ship) {
            board[x][y].ship.hit(board[x][y].index);
            board[x][y] = "hit";
        }

        return board[x][y];
    }

    return {
        board,
        missedAttacks,
        placedShips,
        getBoard,
        placeShip,
        receiveAttack
    }

}

module.exports = Gameboard;