var Dragon = /** @class */ (function () {
    function Dragon(theName, theRider, theTemperment) {
        this.name = theName;
        this.rider = theRider;
        this.temperment = theTemperment;
        this.timesEaten = 0;
        this.hungry = true;
    }
    return Dragon;
}());
;
function createDragon(name, rider, temperment) {
    return new Dragon(name, rider, temperment);
}
;
function greetRider(dragon) {
    return "Hi, ".concat(dragon.rider, "!");
}
function eat(dragon) {
    dragon.timesEaten += 1;
    dragon.timesEaten < 3 ? dragon.hungry = true : dragon.hungry = false;
    return dragon;
}
function findFireBreathers(dragons) {
    var fireBreathers = [];
    dragons.forEach(function (dragon) {
        if (dragon.temperment === 'aggressive') {
            fireBreathers.push(dragon);
        }
    });
    return fireBreathers;
}
module.exports = {
    createDragon: createDragon,
    greetRider: greetRider,
    eat: eat,
    findFireBreathers: findFireBreathers
};
