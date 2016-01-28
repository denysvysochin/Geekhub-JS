describe('Start Controller', function () {

    var gameService;

    beforeEach(module("app"));

    var ctrl;

    beforeEach(function () {
        gameService = {
            games: [],
            addGame: function() {}
        };

        inject(function ($controller) {
            ctrl = $controller("StartController", {
                GameService: gameService
            });
        });
    });

    it('It saves a game', function() {
        ctrl.name = 'Fred';
        ctrl.hisName = 'Sasha';
        ctrl.points = 10;
        ctrl.hisPoints = 12;

        spyOn(gameService, 'addGame');

        ctrl.save();

        expect(gameService.addGame).toHaveBeenCalledWith('Fred', 'Sasha', 10, 12);
    });
});
