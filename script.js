'use strict';

var cat = {
    name: {
        first: 'Flyffy',
        last: 'Muffy'
    },
    color: 'White'
}

cat['eye color'] = 'green';


Object.defineProperty(cat, 'name', { writable: false });
Object.freeze(cat.name);
cat.name.first = 'NewCat';
display(cat.name);