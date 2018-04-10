'use strict';

class Animal {
    constructor(voice) {
        this.voice = voice || 'grrrr';
    }

    speak() {
        display(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var cat = new Cat('fluffly', 'white');
display(cat);




