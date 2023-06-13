const Ship = require('./ship');

test("Hit method should increase", () => {
    const ship = Ship("Destroyer");
    ship.hit(0);
    expect(ship.getHits()).toEqual(["hit", null]);
})

test("Three hits sunks Submarine", () => {
    const ship = Ship("Submarine");
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
})

test("Three hits sunks Cruiser", () => {
    const ship = Ship("Cruiser");
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
})

test("Four hits sunks Battleship", () => {
    const ship = Ship("Battleship");
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    expect(ship.isSunk()).toBe(true);
})

test("Five hits sunks Carrier", () => {
    const ship = Ship("Carrier");
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBe(true);
})

test("Number of hits well displayed", () => {
    const ship = Ship("Carrier");
    ship.hit(0);
    ship.hit(4);
    expect(ship.getHits()).toEqual(['hit', null, null, null, 'hit'])
})

test("Carrier length should be 5", () => {
    const ship = Ship("Carrier");
    expect(ship.length).toBe(5);
})

test("Ship ID should work", () => {
    const ship = Ship("Carrier");
    expect(ship.id).toBe("Carrier");
})