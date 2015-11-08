/**
 * Array Functions
 */
var myMap = function (array, func) {
    var newArr = [];
    array.forEach(function (item, i, arr) {
        newArr.push(func(item, i, arr));
    });
    return newArr;
};

var myReduce = function (array, func, first) {
    var previousValue = first;
    array.forEach(function (item, index, arr) {
        previousValue = func(previousValue, item, index, arr);
    });
    return previousValue;
};

var myForEach = function (array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
};

var mySome = function (array, func) {
    var result = false;
    array.forEach(function (item, i, array) {
        if (func(item, i, array)){
            result = true;
        }
    });
    return result;
};

var myEvery = function (array, func) {
    var result = true;
    array.forEach(function (item, i, array) {
        if (!func(item, i, array)){
            result = false;
        }
    });
    return result;
};

var myIndexOf = function (array, element, number) {
    var index = -1, currentPosition = 1;
    number = number || 1;
    array.forEach(function (item, i) {
        if (item === element) {
            number == currentPosition ? index = i : currentPosition++;
        }
    });
    return index;
};

var myReverse = function (array) {
    var newArr = [];
    array.forEach(function (item) {
        newArr.unshift(item);
    });
    return newArr;
};

var myJoin = function (array, str) {
    var newString = array[0] + "";
    if (array.length > 1) {
        for (var i = 1; i < array.length; i++) {
            newString += str + (array[i] + "");
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
        for (var j = 0; j < sortedArray.length-i-1; j++) {
            if (sortedArray[j] > sortedArray[j+1]) {
                var tmp = sortedArray[j];
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = tmp;
            }
        }
    }
    return sortedArray;
};

var insertionSort = function (array) {
    var sortedArray = array;
    for (var i = 1; i < sortedArray.length; i++) {
        for (var j = i; sortedArray[j-1] > sortedArray[j]; j--) {
            var tmp = sortedArray[j];
            sortedArray[j] = sortedArray[j-1];
            sortedArray[j-1] = tmp;
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
console.log(myMap(testArr, function (item) {return item.length;}));

//Test Reduce
console.log(myReduce(testArr, function (prev, current) {return prev + " " + current + " ";}, ""));

//Test ForEach
myForEach(testArr, function (item) {console.log(item)});

//Test Every
console.log(myEvery(testArr, function (item) {return item == "one";}));

//Test Some
console.log(mySome(testArr, function (item) {return item == "one";}));

//Test IndexOf
console.log(myIndexOf(testArr, "three"));

//Test Reverse
console.log(myReverse(testArr));

//Test Join
console.log(myJoin(testArr, ", "));

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
