const Player = require("./player");

test("function getType should return the type of Player", () => {
    const player = Player();

    expect(player.getType()).toBe("human");
})