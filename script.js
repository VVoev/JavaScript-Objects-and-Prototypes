'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
}

cat['eye color'] = 'green';

display(Object.getOwnPropertyDescriptor(cat, 'color'))
display('xaxa');    