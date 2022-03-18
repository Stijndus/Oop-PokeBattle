"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, maxHealth, energyType, attacks, weakness, resistance) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = this.maxHealth;
        this.type = energyType;
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
        this.alive = true;
    }
    Pokemon.prototype.Attack = function (attack, defender) {
        console.log("".concat(defender.name, "'s health is ").concat(defender.currentHealth));
        var currentDamage;
        if (attack.energyType.name === defender.weakness.name) {
            currentDamage = attack.baseDamage * defender.weakness.multiplier;
            console.log("".concat(this.name, " attack ").concat(defender.name, " with ").concat(attack.name, ", did ").concat(currentDamage, " and was very effective!"));
            defender.TakeDamage(currentDamage);
        }
        else if (attack.energyType.name === defender.resistance.name) {
            currentDamage = attack.baseDamage - defender.resistance.value;
            console.log("".concat(this.name, " attack ").concat(defender.name, " with ").concat(attack.name, ", did ").concat(currentDamage, " and was not very effective!"));
            defender.TakeDamage(currentDamage);
        }
        else {
            console.log("".concat(this.name, " attack ").concat(defender.name, " with ").concat(attack.name, ", did ").concat(attack.baseDamage, "!"));
            defender.TakeDamage(attack.baseDamage);
        }
    };
    Pokemon.prototype.TakeDamage = function (damage) {
        this.currentHealth -= damage;
        if (this.currentHealth <= 0) {
            this.Die();
        }
        else {
            console.log("".concat(this.name, " has ").concat(this.currentHealth, " HP"));
        }
    };
    Pokemon.prototype.Die = function () {
        this.alive = false;
        console.log("".concat(this.name, " has fainted"));
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map