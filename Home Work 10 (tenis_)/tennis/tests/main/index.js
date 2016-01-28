describe('Main Controller', function () {

    var gameService;

    beforeEach(module("app"));

    var ctrl;

    beforeEach(function () {
        inject(function (GameService) {
            gameService = GameService;
        });

        inject(function ($controller) {
            ctrl = $controller("MainController", {
                GameService: gameService
            });
        });
    });

    it('Shows games list on main', function() {
        gameService.clear();
        expect(ctrl.viewGames.length).toEqual(5);
        ctrl.showAll();
        expect(ctrl.viewGames.length).toEqual(7);
        expect(ctrl.isCollapsed).toEqual(false);
    });

    it('Percentages check', function () {
        ctrl.games = [{name1: "T1", score1: 1, name2: "T2", score2: 0, time: new Date()},
                            {name1: "T1", score1: 0, name2: "T2", score2: 1, time: new Date()}];
        var percentages = ctrl.percentages();
        expect(percentages[0].percent).toEqual('50.00');
        expect(percentages[1].percent).toEqual('50.00');
    });
});

