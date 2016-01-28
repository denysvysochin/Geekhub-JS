class GameService {
    constructor() {
        this.clear();
    }

    addGame(name1, name2, score1, score2) {
        this.games.push({
            name1, name2, score1, score2, time: new Date()
        });
        console.log(this.games);
    }

    clear() {
        this.games = [{
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 21,
            time: new Date()
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 5,
            time: new Date()
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date()
        }, {
            name1: 'Denys',
            name2: 'Vova',
            score1: 10,
            score2: 1,
            time: new Date()
        }, {
            name1: 'Denys',
            name2: 'Vova',
            score1: 10,
            score2: 2,
            time: new Date()
        }, {
            name1: 'Denys',
            name2: 'Vova',
            score1: 10,
            score2: 3,
            time: new Date()
        }, {
            name1: 'Denys',
            name2: 'Vova',
            score1: 10,
            score2: 4,
            time: new Date()
        }];
    }
}

export default GameService;
