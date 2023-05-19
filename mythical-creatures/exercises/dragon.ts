function createDragon(dragonName:string, dragonRider: string, dragonTemperment: string) {
    const name = dragonName
    const rider = dragonRider
    const temperment = dragonTemperment
    let hungry = true
    let timesEaten = 0

    return {
        name,
        rider,
        temperment,
        hungry,
        timesEaten
    }
}    

function greetRider(dragon): string {
    return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
    dragon.timesEaten += 1;
    dragon.timesEaten < 3 ? dragon.hungry = true : dragon.hungry = false;
    return dragon
}

function findFireBreathers(dragons): object[] {
    var fireBreathers = [];

    dragons.forEach(dragon => {
        if (dragon.temperment === 'aggressive') {
            fireBreathers.push(dragon)
        }
    })

    return fireBreathers
}

module.exports = {
    createDragon, 
    greetRider, 
    eat, 
    findFireBreathers
  }