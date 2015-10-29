var fn = function(decorators, originalFunction) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        var tmpArgs;
        for (var i = 0; i < decorators.length; i++) {
            tmpArgs = decorators[i].apply(null, args);
            if (tmpArgs) {
                args = tmpArgs
            } else {
                break;
            }
        }
        return originalFunction.apply(null, args);
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

add = fn ([toNumber], add);

console.log(add('2', 1, '3'));

