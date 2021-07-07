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

class Sensei extends Ninja {
    constructor (ninjaname, wisdom = 10) {
        super(ninjaname, 100, 3, 6);
        this.ninjaname = ninjaname;
        this.wisdom = wisdom;
    }

    speakwisdom() {
        this.drinksake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`);
    }

    showstats() {
        console.log (`Name: ${ this.ninjaname }, Strength ${ this.strength }, Speed: ${ this.speed }, Health: ${ this.health }, Wisdom: ${ this.wisdom }`)
    }
}

const newninja = new Ninja("Naruto", 100, 3, 5);
    newninja.codename();
    newninja.showstats();
    newninja.drinksake();

const newSensei = new Sensei ("Dave Breaux")
    newSensei.speakwisdom();
    newSensei.showstats();