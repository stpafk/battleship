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

test("Expect all placed ships to be true", () => {
    const gameboard = Gameboard();
    const s1 = Ship("Destroyer");
    const s2 = Ship("Cruiser");
    const s3 = Ship("Submarine");
    const s4 = Ship("Battleship");
    const s5 = Ship("Carrier");

    gameboard.placeShip(s1, "horizontal", 0, 0);
    gameboard.placeShip(s2, "horizontal", 1, 0);
    gameboard.placeShip(s3, "horizontal", 2, 0);
    gameboard.placeShip(s4, "horizontal", 3, 0);
    gameboard.placeShip(s5, "horizontal", 4, 0);

    expect(gameboard.allShipsPlaced()).toBe(true);
})

test("Missed attack correctly displayed", () => {
    const gameboard = Gameboard();
    gameboard.receiveAttack(0, 0);

    expect(gameboard.missedAttacks.length).toBe(1);
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

test("Receive Attack works with null", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe("miss");
})

test("Receive Attack works with placed ship", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    gameboard.placeShip(ship, "horizontal", 0, 0);

    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe("hit");
})

test("Receive attack function sunks ship", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    gameboard.placeShip(ship, "horizontal", 0, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    
    expect(gameboard.placedShips[0].isSunk()).toBe(true)
})
