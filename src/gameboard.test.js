const Gameboard = require("./gameboard");
const Ship = require("./ship");

test("Expect board to exist", () => {
    const gameboard = Gameboard();
    
    expect(gameboard.getBoard()).toEqual(Array(10).fill(null).map(() => Array(10).fill(null)))
})

test("Placing works", () => {
    const gameboard = Gameboard();
    const ship = Ship("Carrier");
    const ship2 = Ship("Battleship")

    gameboard.placeShip(ship, "horizontal", 0, 0);
    expect(gameboard.placedShips.length).toBe(1)
})

test("Vertical works", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");

    gameboard.placeShip(ship, "vertical", 0, 0);
    expect(gameboard.board[0][0]).not.toBeNull();
    expect(gameboard.board[1][0]).not.toBeNull();
    expect(gameboard.board[2][0]).toBe(null)
})

test("Horizontal works", () => {
    const gameboard = Gameboard();
    const ship = Ship("Carrier");

    gameboard.placeShip(ship, "horizontal", 0, 0);
    for (let i = 0; i < 5; i++) {
        expect(gameboard.board[0][i]).not.toBeNull();
    }
})

