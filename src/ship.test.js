const Ship = require('/workspaces/battleship/src/ship');

test("Hit method should increase", () => {
    const ship = Ship("Destroyer");
    ship.hit();
    expect(ship.getHits()).toBe(1);
})

test("Three hits sunks ship", () => {
    const ship = Ship("Submarine");
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test("Three hits sunks ship", () => {
    const ship = Ship("Cruiser");
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})