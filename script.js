'use strict';

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        display('Meow');
    }
}

var cat = new Cat("Fluffy", "white");
cat.speak();


display(cat);