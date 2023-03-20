"use strict";


// 1) 4 класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д.)

// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше) +

// 3) у кожного класу має бути своя унікальна властивість +

// 4) у кожного класу має бути приватна властивість +

// 4) у двох класів має бути спільний предок та спільний метод характерний тільки для них +

// 5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок +



class Animals {
    constructor(name, habitat, liveInUkraine) {
        this.name = name;
        this.habitat = habitat;
        this.liveInUkraine = liveInUkraine;
    }

    doSpeciesOfAnimalLiveInUkraine () {
        if (this.liveInUkraine) {
            console.log(`I am ${this.name} and my species live in Ukraine`);
        } else {
            console.log(`I am ${this.name} and my species don't live in Ukraine`)
        }
    }
}

class Rodents extends Animals{
    constructor(name, habitat, liveInUkraine) {
        super(name, habitat, liveInUkraine)
    }

    eatSeed = () => console.log(`I like eating seeds`);
}

class Otter extends Animals {
    #amountOfFish;
    constructor(name, habitat, liveInUkraine) {
        super(name, habitat, liveInUkraine)
        this.superpower = "I can sleep on the water";
        this.#amountOfFish = 0;
    }

    catchFish () {
        this.#amountOfFish = this.#amountOfFish + 1;
        if (this.#amountOfFish > 5) {
            console.log("You have caught enough fish")
        } else {
            console.log('Well done!')
        }
    }

    eatFish () {
        this.#amountOfFish = 0;
    }

    rest() {
        console.log(`${this.superpower} and I like it`);
    }

}
class Koala extends Animals{
    #hoursOfSleep;
    constructor(name, habitat, liveInUkraine) {
        super(name, habitat, liveInUkraine);
        this.superpower = "I can sleep 21 hour per day";
        this.#hoursOfSleep = 0;
    }

    sleep () {
        this.#hoursOfSleep = this.#hoursOfSleep + 1;
        if (this.#hoursOfSleep > 20) {
            console.log("You've slept enough, climb trees")
        }
    }

    climbTrees () {
        console.log(`${this.name} is hungry, find eucalyptus`);
    }

    findEucalyptus() {
        console.log(`${this.name} exhausted, go to sleep`);
        this.#hoursOfSleep = 0;
    }

}
class Chinchilla extends Rodents {
    #bathTime;
    constructor(name, habitat, liveInUkraine) {
        super(name, habitat, liveInUkraine)
        this.superpower = "I'm the fluffiest animal";
        this.#bathTime = false;
    }

    takeBath () {
        if (this.#bathTime) {
            console.log('I like to take a sand bath')
        } else {
            console.log("Your fur is clean")
        }
    }
    run () {
        this.#bathTime = true;
        console.log("I like running");
    }
}
class Marmot extends Rodents {
    #food;
    constructor(name, habitat, liveInUkraine) {
        super(name, habitat, liveInUkraine)
        this.superpower = "I predict the weather and Americans celebrate my day";
        this.#food = 0;
    }

    findFood() {
        this.#food = this.#food + 1;
        if (this.#food < 4) {
            console.log(`It's not enough, keep finding`) 
        } else {
            console.log(`It's enough food`)
        }
    }
    predictTheWeather () {
        console.log(`The weather in ${this.habitat} will be...`)
    }

    screamLikeMan = () => console.log('AAAAA');
}

let Phil = new Marmot("Phil", "North America", true);

// Phil.doSpeciesOfAnimalLiveInUkraine();
// console.log(Phil.superpower);
// Phil.predictTheWeather();
// Phil.screamLikeMan();

let Sonya = new Chinchilla('Sonya', "South America", false);

// Sonya.eatSeed();

let Zorro = new Otter('Zorro', "Europe", true);

// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
// Zorro.catchFish();
