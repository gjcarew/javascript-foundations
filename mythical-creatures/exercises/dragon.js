function createDragon(dragonName, dragonRider, dragonTemperment) {
    var name = dragonName;
    var rider = dragonRider;
    var temperment = dragonTemperment;
    var hungry = true;
    var timesEaten = 0;
    return {
        name: name,
        rider: rider,
        temperment: temperment,
        hungry: hungry,
        timesEaten: timesEaten
    };
}
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
