'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;
var cat1 = new Cat('Fluffy', 'white');
var cat2 = new Cat('Muffin', "Brown");

cat1.age = 21;

display(cat1.age);
display(cat1.__proto__.age);

console.log(cat1);
console.log(cat2);
