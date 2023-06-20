const Player = require("../src/player");

test("function getType should return the type of Player", () => {
    const player = Player();

    expect(player.getType()).toBe("human");
})

test("Function getFleet should create fleet", () => {
    const player = Player();
    let fl = player.getFleet();
    expect(fl.length).toBe(5)
})