

const Gameboard = () => {
    
    let board = Array(10).fill(null).map(() => Array(10).fill(null));
    const missedAttacks = [];
    const placedShips = [];

    /** Returns the board. */
    function getBoard() { return board };

    /** Function that checks if all ships have been placed
     * Game won't start if it ain't.
     * @return boolean
     */
    function allShipsPlaced() { return placedShips.length === 5}

    /** Function that checks if the ship placement is valid I.E under range.
     * @param {ship} ship Takes the ship object to work with its atributes
     * @param {row} row Row taken from placeShip
     * @param {column} column Column taken from placeShip
     * @return {boolean} True or false
     */
    function isValidPosition(ship, row, column) {
        let x = row
        let y = column
        if (x < 0 || x >= 10 || y < 0 || y >= 10) {
            return false;
        }
        if (ship.getDirection() === "vertical") {
            if (x + ship.shipLength > 10) {
                return false;
            }

            for (let i = 0; i < ship.shipLength; i++) {
                if (board[x + i][y] !== null) {
                    return false;
                }
            }
        } else {
            if (y + ship.shipLength > 10) {
                return false;
            }

            for (let i=0; i < ship.shipLength; i++) {
                if (board[x][y + i] !== null) {
                    return false;
                }
            }
        }

        return true;
    } 

    /** Function to place ship that takes four parameters: ship, direction, row, column
     * @param {ship} ship The Ship object taken from DOM
     * @param {row} row Row index
     * @param {column} column Column index
     * If every parameter is valid, will push into the placedShips array
     */
    function placeShip(ship, row, column) {

        if (isValidPosition(ship, row, column) === true) {
            if (ship.getDirection() === "vertical") {
                for (let i = 0; i < ship.shipLength; i++) {
                    board[row + i][column] = {ship, index: i};
                    //ship.position.push([row + i, column])
                }
            } else {
                for (let i = 0; i < ship.shipLength; i++)
                    board[row][column + i] = {ship, index: i}; 
                    //ship.position.push([row, column + i])
                
            }
    
            placedShips.push(ship);
            return true;
        } 
        return false;
    }

    /** Function receive attack that takes two parameters: x and y
     * @param {x} x First (row) index taken from the matrix
     * @param {y} y Second (column) index taken from the matrix
     * @return The board 
     */
    function receiveAttack(x, y) {

        if (board[x][y] === null) {
            missedAttacks.push([x, y]);
            board[x][y] = "miss";

        } else if (board[x][y].ship) {
            board[x][y].ship.hit(board[x][y].index);
            board[x][y] = "hit";
        }

        return board[x][y];
    }

    /** Function that checks whether the game has ended (5 ships sunk)
     * @return Boolean
     */
    function isGameOver() {
        
        for (let i = 0; i < placedShips.length; i++) {
            if (placedShips[i].isSunk() === false) {
                return false;
            }
        }
        return true;

    }

    function autoPlace(ship) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const changeOrient = Math.random() > 0.5;
        if (changeOrient) {
            ship.changeDirection();
        }

        const place = placeShip(ship, x, y)
        if (!place) {
            autoPlace(ship);
        }

    }

    function autoPlaceFleet(fleet) {
        for (let ship in fleet) {
            autoPlace(fleet[ship]);
        }
    }

    function reset() {
        board = Array(10).fill(null).map(() => Array(10).fill(null));
        placedShips = [];
    }


    return {autoPlaceFleet, board, missedAttacks, placedShips, allShipsPlaced, isValidPosition, isGameOver, getBoard, placeShip, receiveAttack, reset}

}

module.exports = Gameboard;