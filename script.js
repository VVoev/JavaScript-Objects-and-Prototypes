'use strict';

function Animal(voice) {
    this.voice = voice || 'grrrrrrrrrrrrrrrrr';
}
Animal.prototype.speak = function () {
    display(this.voice);
}
function Cat(name, color) {
    Animal.call(this, "Meow");
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat

var cat1 = new Cat('Fluffy', 'white');
var cat2 = new Cat('Muffin', "Brown");


Cat.prototype = {
    age: 5
}

var cat3 = new Cat('SnowBell', 'White');


display(cat1);
console.log(cat1);




