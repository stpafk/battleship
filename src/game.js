const Ship = requires("./ship");
const Gameboard = requires("./gameboard");
const Player = requires("./player");

const Game = () => {

    const player1 = Player();
    const player2 = Player("computer");

    const p1Board = Gameboard();
    const p2Board = Gameboard();

    const resetGame = () => {
        player1.resetFleet();
        player2.resetFleet();
        p1Board.reset();
        p2Board.reset();
    }

    

    return { resetGame }
}