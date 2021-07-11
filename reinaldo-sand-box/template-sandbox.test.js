'use strict';

// a couple of ways to create objects

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

var myCar2 = {
    make: 'Ford',
    model: 'Fairline',
    year: 1969
};

console.log(myCar);
console.log(myCar2);