"use strict";

function Animals(name, habitat, liveInUkraine){
    this.name = name;
    this.habitat = habitat;
    this.liveInUkraine = liveInUkraine;
}

Animals.prototype.doSpeciesOfAnimalLiveInUkraine = function() {
    if (this.liveInUkraine) {
        console.log(`I am ${this.name} and Ukraine is a natural habitat of my species`);
    } else {
        console.log(`I am ${this.name} and Ukraine isn't a natural habitat of my species`)
    }
}

function Rodents(name, habitat, liveInUkraine) {
    Animals.call(this, name, habitat, liveInUkraine)
}

Rodents.prototype = Object.create(Animals.prototype);
Rodents.prototype.eatSeed = function() {
    console.log(`I like eating seeds`);
}


function Otter(name, habitat, liveInUkraine) {
    let amountOfFish = 0;
    this.getAmountOfFish = function() {
        return amountOfFish;
    }
    this.setAmountOfFish = function(num) {
        amountOfFish = num;
    }
    Animals.call(this, name, habitat, liveInUkraine)
    this.superpower = "I can sleep on the water";
}

Otter.prototype = Object.create(Animals.prototype);
Otter.prototype.catchFish = function() {
    this.setAmountOfFish(this.getAmountOfFish() + 1);
    if (this.getAmountOfFish() > 4) {
        console.log("You have caught enough fish")
    } else {
        console.log('Well done!')
    }
}

Otter.prototype.eatFish = function() {
    this.setAmountOfFish(0);
}

Otter.prototype.rest = function() {
    console.log(`${this.superpower} and I like it`);
}

function Koala(name, habitat, liveInUkraine) {
    let hoursOfSleep = 0;
    this.getHoursOfSleep = function() {
        return hoursOfSleep;
    }
    this.setHoursOfSleep = function(num) {
        hoursOfSleep = num;
    }
    Animals.call(this, name, habitat, liveInUkraine);
    this.superpower = "I can sleep 21 hour per day";
}

Koala.prototype = Object.create(Animals.prototype);
Koala.prototype.sleep = function() {
    this.setHoursOfSleep(this.getHoursOfSleep() + 1);
    console.log('ZZZ');
    if (this.getHoursOfSleep() > 2) {
        console.log("You've slept enough, climb trees")
    }
}

Koala.prototype.climbTrees = function() {
    console.log(`${this.name} is hungry, find eucalyptus`);
}

Koala.prototype.findEucalyptus = function() {
    console.log(`${this.name} exhausted, go to sleep`);
    this.setHoursOfSleep(0);
}

function Chinchilla(name, habitat, liveInUkraine){
    let bathTime;
    this.setBathTime = function() {
        bathTime = !bathTime;
    }
    this.getBathTime = function() {
        return bathTime;
    }
    Rodents.call(this, name, habitat, liveInUkraine);
    this.superpower = "I'm the fluffiest animal";
}

Chinchilla.prototype = Object.create(Rodents.prototype);
Chinchilla.prototype.takeBath = function() {
    if (this.getBathTime()) {
        console.log('I like taking a sand bath');
        this.setBathTime();
    } else {
        console.log("Your fur is clean")
    }
}
Chinchilla.prototype.run = function() {
    this.setBathTime();
    console.log("I like running");
}



function Marmot(name, habitat, liveInUkraine) {
    Rodents.call(this, name, habitat, liveInUkraine)
    let reserves = 0;
    this.getReserves = function() {
        return reserves;
    }
    this.setReserves = function() {
        reserves = reserves + 1;
    }
    this.superpower = "I predict the weather and Americans celebrate my day";
}
Marmot.prototype = Object.create(Rodents.prototype);

Marmot.prototype.findFood = function() {
    this.setReserves();
    if (this.getReserves() < 4) {
        console.log(`It's not enough, keep finding`) 
    } else {
        console.log(`It's enough food`)
    }
}

Marmot.prototype.predictTheWeather = function() {
    console.log(`The weather in ${this.habitat} will be...`)
}
Marmot.prototype.scream = function() {
    console.log('AAAAA');
}

let Phil = new Marmot("marmot", "North America", true);

// Phil.doSpeciesOfAnimalLiveInUkraine();
// console.log(Phil.superpower);
// Phil.predictTheWeather();
// Phil.findFood();
// Phil.findFood();
// Phil.findFood();
// Phil.findFood();

let Sonya = new Chinchilla('chinchilla', "South America", false);

// Sonya.eatSeed();
// Sonya.run();
// Sonya.takeBath();
// Sonya.takeBath();
// Sonya.doSpeciesOfAnimalLiveInUkraine();

let Petro = new Koala('koala', "Australia", false);

// Petro.sleep();
// Petro.sleep();
// Petro.sleep();

let Zorro = new Otter('otter', "Europe", true);

// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
