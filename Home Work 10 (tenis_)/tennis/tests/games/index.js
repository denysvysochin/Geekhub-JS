describe("Game Service", function () {

    beforeEach(module("app"));

    var gameService;

    beforeEach(function() {
        inject(function (GameService) {
            gameService = GameService;
        });
    });

    it('Starts with some games', function() {
        expect(gameService.games.length).toEqual(7);
    });

    it("Adds a game", function() {

        gameService.addGame('Fred', 'Sasha', 21, 20);

        expect(gameService.games.length).toEqual(8);
        var game = gameService.games[gameService.games.length - 1];
        expect(game.name1).toEqual('Fred');
        expect(game.name2).toEqual('Sasha');
        expect(game.score1).toEqual(21);
    });
});
