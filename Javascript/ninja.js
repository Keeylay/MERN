// parent class ninja
class Ninja {
    constructor(ninjaname, health, speed, strength) {
        this.ninjaname = ninjaname;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    codename() {
        console.log(`Hello my name is ${ this.ninjaname }`)
    }

    showstats() {
        console.log(`Name: ${ this.ninjaname }, Strength ${ this.strength }, Speed: ${ this.speed }, Health: ${ this.health }`)
    }

    drinksake () {
        this.health += 10;
        console.log(`Health is now ${ this.health }`)
    }
}

const newninja = new Ninja("naruto", 100, 3, 5);
    newninja.codename();
    newninja.showstats();
    newninja.drinksake();