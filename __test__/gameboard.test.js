const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

test("Expect board to exist", () => {
    const gameboard = Gameboard();
    
    expect(gameboard.getBoard()).toEqual(Array(10).fill(null).map(() => Array(10).fill(null)))
})

test("Placing works", () => {
    const gameboard = Gameboard();
    const ship = Ship("Carrier");
    const ship2 = Ship("Battleship")

    gameboard.placeShip(ship, 0, 0);
    expect(gameboard.placedShips.length).toBe(1)
})

test("Expect all placed ships to be true", () => {
    const gameboard = Gameboard();
    const s1 = Ship("Destroyer");
    const s2 = Ship("Cruiser");
    const s3 = Ship("Submarine");
    const s4 = Ship("Battleship");
    const s5 = Ship("Carrier");

    gameboard.placeShip(s1, 0, 0);
    gameboard.placeShip(s2, 1, 0);
    gameboard.placeShip(s3, 2, 0);
    gameboard.placeShip(s4, 3, 0);
    gameboard.placeShip(s5, 4, 0);

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
    ship.changeDirection();
    
    gameboard.placeShip(ship, 0, 0);
    expect(gameboard.board[0][0]).not.toBeNull();
    expect(gameboard.board[1][0]).not.toBeNull();
    expect(gameboard.board[2][0]).toBe(null)
})

test("Horizontal works", () => {
    const gameboard = Gameboard();
    const ship = Ship("Carrier");

    gameboard.placeShip(ship, 0, 0);
    for (let i = 0; i < 5; i++) {
        expect(gameboard.board[0][i]).not.toBeNull();
    }
})

test("Expect receiveAttack to miss", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe("miss");
})

test("Expect receive attack to hit", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    gameboard.placeShip(ship, 0, 0);

    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe("hit");
})

test("Expect receive attack function to sink ship", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    gameboard.placeShip(ship, 0, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    
    expect(gameboard.placedShips[0].isSunk()).toBe(true)
})

test("Expect valid position to be correctly placed", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    const ship2 = Ship("Carrier");

    expect(gameboard.placeShip(ship, 0, 9)).toBe(false)
    ship.changeDirection();
    expect(gameboard.placeShip(ship, 0, 0)).toBe(true)
    expect(gameboard.placeShip(ship2, 0, 6)).toBe(false)
    expect(gameboard.placeShip(ship2, 0, 5)).toBe(true)

})

test("Expect positioning already taken x and y to return false", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    const ship2 = Ship("Carrier");

    ship.changeDirection();
    expect(gameboard.placeShip(ship, 0, 0)).toBe(true)
    expect(gameboard.placeShip(ship2, 0, 0)).toBe(false)
})

test("Game test with only one gameboard should pass all tests", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    const ship1 = Ship("Submarine");
    const ship2 = Ship("Cruiser");
    const ship3 = Ship("Battleship")
    const ship4 = Ship("Carrier");

    gameboard.placeShip(ship, 0, 0)
    gameboard.placeShip(ship1, 1, 0)
    gameboard.placeShip(ship2, 2, 0)
    gameboard.placeShip(ship3, 3, 0)
    gameboard.placeShip(ship4, 4, 0)

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);

    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);

    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(2, 2);

    gameboard.receiveAttack(3, 0);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(3, 3);

    gameboard.receiveAttack(4, 0);
    gameboard.receiveAttack(4, 1);
    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(4, 4);

    expect(gameboard.placedShips[0].isSunk()).toBe(true);
    expect(gameboard.placedShips[1].isSunk()).toBe(true);
    expect(gameboard.placedShips[2].isSunk()).toBe(true);
    expect(gameboard.placedShips[3].isSunk()).toBe(true);
    expect(gameboard.placedShips[4].isSunk()).toBe(true);
})

test("Game over should be false", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    const ship1 = Ship("Submarine");
    const ship2 = Ship("Cruiser");
    const ship3 = Ship("Battleship")
    const ship4 = Ship("Carrier");

    gameboard.placeShip(ship, 0, 0)
    gameboard.placeShip(ship1, 1, 0)
    gameboard.placeShip(ship2, 2, 0)

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);

    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);

    expect(gameboard.isGameOver()).toBe(false);
})

test("Expect isGameOver to be true", () => {
    const gameboard = Gameboard();
    const ship = Ship("Destroyer");
    const ship1 = Ship("Submarine");

    gameboard.placeShip(ship, 0, 0);
    gameboard.placeShip(ship1,  1, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);

    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);

    expect(gameboard.isGameOver()).toBe(true);
})