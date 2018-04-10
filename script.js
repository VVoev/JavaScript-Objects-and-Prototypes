'use strict';

var cat = {
    name: {
        first: 'Flyffy',
        last: 'Muffy'
    },
    color: 'White'
}

Object.defineProperty(cat, 'fullname', {
    get: function () {
        return this.name.first + ' ' + this.name.last
    },

    set: function (value) {
        var nameparts = value.split(' ');
        this.name.first = nameparts[0];
        this.name.last = nameparts[1];
    }
})
display(cat.fullname);
cat.fullname = "Orange Drag";
display(cat.fullname);
