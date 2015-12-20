var DimCell = 31;
var isFirstField = true;
var gameInterval;
var field1 = new Array(10);
var field2 = new Array(10);

var createFieldsArray = function () {
    for (var iter = 1; iter <= DimCell; iter++) {
        field1[iter] = new Array(DimCell);
        field2[iter] = new Array(DimCell);
    }
    for (var i = 1; i <= DimCell; i++) {
        for (var j = 1; j <= DimCell; j++) {
            field1[i][j] = 0;
            field2[i][j] = 0;
        }
    }
};

/**
 * This function for default game initial
 */
var initStartPositions = function () {
    field1[5][5] = 1;
    field1[5][6] = 1;
    field1[5][7] = 1;
    field1[4][7] = 1;
    field1[3][6] = 1;

};

var initButtons = function () {
    document.getElementById("start").addEventListener("click", startGame);
    document.getElementById("pause").addEventListener("click", pause);
    document.getElementById("nextStep").addEventListener("click", nextStep);
};

var initGame = function () {
    initButtons();
    createFieldsArray();
    var gameField = document.getElementById("gameField");
    gameField.style.width = DimCell*14+"px";

    for (var i=1; i<=DimCell; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = i;
        for (var j=1; j<=DimCell; j++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.id = j;
            cell.addEventListener('click', initEvent);
            row.appendChild(cell);
        }
        gameField.appendChild(row);
    }
    initStartPositions();
    redraw(field1);
    //startGame();
};

var initEvent = function (event) {
    var element = event.target,
        j = element.id-1,
        i  = element.parentNode.id-1;
    field1[i][j] = field1[i][j] == 1 ? 0 : 1;
    field2[i][j] = field2[i][j] == 1 ? 0 : 1;
    redraw(isFirstField ? field1: field2);
};

var redraw = function (field) {
    var rows = document.getElementsByClassName("row");

    for (var i=1; i<DimCell; i++) {
        var row = rows[i];
        var cells = row.childNodes;
        for (var j=1; j<DimCell; j++) {
            var cell = cells[j];
            if (field[i][j]) {
                cell.style.backgroundColor = "#32FF3C";
            } else {
                cell.style.backgroundColor = "black";
            }
        }
    }
};

var startGame = function () {
    gameInterval = setInterval(nextStep, 200);

};

var pause = function () {
    if (gameInterval) {
        clearInterval(gameInterval);
    }
};

var nextStep = function () {

    if (isFirstField) {
        for (var i = 1; i < DimCell; i++) {
            for (var j = 1; j < DimCell; j++) {
                field2[i][j] = field1[i][j];
            }
        }
        for (var i = 2; i < DimCell; i++) {
            var tmp = 0;
            for (var j = 2; j < DimCell; j++) {
                tmp = field1[i - 1][j - 1] + field1[i - 1][j]
                    + field1[i - 1][j + 1] + field1[i][j - 1]
                    + field1[i][j + 1] + field1[i + 1][j + 1]
                    + field1[i + 1][j] + field1[i + 1][j - 1];

                if (tmp == 3) {

                    field2[i][j] = 1;
                } else {
                    if ((tmp > 3) || (tmp < 2)) {
                        field2[i][j] = 0;
                    }
                }
            }
        }
    } else {
        for (var i = 1; i < DimCell; i++) {
            for (var j = 1; j < DimCell; j++) {
                field1[i][j] = field2[i][j];
            }
        }
        for (var i = 2; i < DimCell; i++) {
            var tmp = 0;
            for (var j = 2; j < DimCell; j++) {
                tmp = field2[i - 1][j - 1] + field2[i - 1][j]
                    + field2[i - 1][j + 1] + field2[i][j - 1]
                    + field2[i][j + 1] + field2[i + 1][j + 1]
                    + field2[i + 1][j] + field2[i + 1][j - 1];

                if (tmp == 3) {
                    field1[i][j] = 1;
                } else {
                    if ((tmp > 3) || (tmp < 2)) {
                        field1[i][j] = 0;
                    }
                }
            }
        }
    }
    redraw(isFirstField ? field2: field1);
    isFirstField = !isFirstField;
};

document.addEventListener("DOMContentLoaded", initGame);

