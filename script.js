'use strict';

var cat = {
    name: {
        first: 'Flyffy',
        last: 'Muffy'
    },
    color: 'White'
}

//once set to false cannot be returned
Object.defineProperty(cat, 'name', { configurable: false });


Object.defineProperty(cat, 'name', { configurable: true });