var fn = function() {
    var functions = Array.prototype.slice.call(arguments);
    return function () {
        var args = Array.prototype.slice.call(arguments);
        var tmpArgs;
        for (var i = 0; i < functions.length-1; i++) {
            tmpArgs = functions[i].apply(null, args);
            if (tmpArgs) {
                args = tmpArgs
            } else {
                break;
            }
        }
        if (tmpArgs) {
            return functions[functions.length-1].apply(null, args);
        }
    };
};

/**
 * Test
 */

var add = function (a, b, c) {
    return a + b + c;
};

var toNumber = function() {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = +arguments[i];
    }
    return Array.prototype.slice.call(arguments);
};

add = fn (toNumber, add);

console.log(add('2', 1, '3'));

