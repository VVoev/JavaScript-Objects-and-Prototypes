'use strict';

var arr = ['red', 'green', 'blue'];

Object.defineProperty(arr, 'last', {
    get: function () {
        return this[this.length - 1];
    }
})

var last = arr.last;
display(last);


Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length - 1];
    }
})

var arr1 = ['red', 'green', 'drugoBlue'];
var arr2 = [5, 10, 15];
display(arr1.last)
display(arr2.last);
