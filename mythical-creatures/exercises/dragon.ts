class Dragon {
    name: string;
    rider: string;
    temperment: string;
    timesEaten: number;
    hungry: boolean

    constructor(theName: string, theRider: string, theTemperment: string) {
        this.name = theName;
        this.rider = theRider;
        this.temperment = theTemperment;
        this.timesEaten = 0;
        this.hungry = true
    }
};

function createDragon(name:string, rider: string, temperment: string) {
    return new Dragon(name, rider, temperment)
};

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