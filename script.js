'use strict';

var cat = {
    name: {
        first: 'Flyffy',
        last: 'Muffy'
    },
    color: 'White'
}

cat['eye color'] = 'green';


Object.defineProperty(cat, 'name', { enumerable: false })

for (var property in cat) {
    display(property + ' ' + cat[property]);
}


display(Object.keys(cat));