/**
 * Array Functions
 */
var myMap = function (array, func) {
    var newArr = [];
    myForEach(array, function (item, i, arr) {
        newArr.push(func(item, i, arr));
    });
    return newArr;
};

var myReduce = function (array, func, first) {
    var previousValue, i;
    if (first) {
        previousValue = first;
        i = 0;
    } else {
        previousValue = array[0];
        i = 1;
    }
    for (i; i<array.length; i++) {
        previousValue = func(previousValue, array[i], i, array);
    }
    return previousValue;
};

var myForEach = function (array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
};

var mySome = function (array, func) {
    var result = false;
    var BreakException = {};
    try {
        myForEach(array, function (item, i, array) {
            if (func(item, i, array)) {
                result = true;
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return result;
};

var myEvery = function (array, func) {
    var result = true;
    var BreakException = {};
    try {
        myForEach(array, function (item, i, array) {
            if (!func(item, i, array)) {
                result = false;
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return result;
};

var myIndexOf = function (array, element, number) {
    var index = -1, currentPosition = 1;
    var BreakException = {};
    number = number || 1;
    try {
        myForEach(array, function (item, i) {
            if (item === element) {
                number == currentPosition ? index = i : currentPosition++;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return index;
};

var myReverse = function (array) {
    var newArr = [];
    myForEach(array, function (item) {
        newArr.unshift(item);
    });
    array = newArr;
    return array;
};

var myJoin = function (array, str) {
    str = str || ",";
    var newString = array[0] + "";
    if (array.length > 1) {
        for (var i = 1; i < array.length; i++) {
            newString += str + (array[i] ? array[i] : "" + "");
        }
    }
    return newString;
};

/**
 * Sorts
 */

//  I just remembered this algorithm :D
var bubbleSort = function (array) {
    var sortedArray = array;
    for (var i = 0; i < sortedArray.length; i++) {
        for (var j = 0; j < sortedArray.length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                var tmp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = tmp;
            }
        }
    }
    return sortedArray;
};

var insertionSort = function (array) {
    var sortedArray = array;
    for (var i = 1; i < sortedArray.length; i++) {
        for (var j = i; sortedArray[j - 1] > sortedArray[j]; j--) {
            var tmp = sortedArray[j];
            sortedArray[j] = sortedArray[j - 1];
            sortedArray[j - 1] = tmp;
        }
    }
    return sortedArray;
};

//TODO: Need implementing
var mergeSort = function (array) {
    var sortedArray = array;

    return sortedArray;
};

//TODO: Need implementing
var quickSort = function (array) {
    var sortedArray = array;

    return sortedArray;
};

/**
 * Testing
 */

var testArr = ["one", "two", "three", "four", "five"];

//Test Map
console.log(testArr.map(function (item) {
    return item.length;
}));
console.log(myMap(testArr, function (item) {
    return item.length;
}));



//Test Reduce
var testArr = ["one", undefined, "three", "four", "five"];
console.log(myReduce(testArr, function (prev, current) {
    return prev + " " + current + " ";
}));
console.log(testArr.reduce(function (prev, current) {
    return prev + " " + current + " ";
}));

//Test ForEach
testArr = ["one", undefined, "three", "four", "five"];
myForEach(testArr, function (item) {
    console.log(item)
});
testArr.forEach(function (item) {
    console.log(item)
});
testArr = ["one", "two", "three", "four", "five", "three"];
//Test Every
console.log(myEvery(testArr, function (item) {
    return item == "one";
}));
console.log(testArr.every(function (item) {
    return item == "one";
}));
testArr = ["one", undefined, "three", "four", "five"];

//Test Some
console.log(mySome(testArr, function (item) {
    return item == "one";
}));
console.log(testArr.some(function (item) {
    return item == "one";
}));
testArr = ["one", "two", "three", "four", "five"];
//Test IndexOf
console.log(myIndexOf(testArr, "three"));

//Test Reverse
console.log(myReverse(testArr));

//Test Join
testArr = ["one", undefined, "three", "four", "five"];

console.log(myJoin(testArr));
console.log(testArr.join());

//Test Bubble sort
testArr = [9, 8, 7, 1, 2, 4, 3, 5, 6];
console.log(bubbleSort(testArr));

//Test Insertion sort
testArr = [9, 8, 7, 1, 2, 4, 3, 5, 6];
console.log(insertionSort(testArr));

//Test Merge sort
testArr = [9, 8, 7, 1, 2, 4, 3, 5, 6];
console.log(mergeSort(testArr));

//Test Quick sort
testArr = [9, 8, 7, 1, 2, 4, 3, 5, 6];
console.log(quickSort(testArr));
