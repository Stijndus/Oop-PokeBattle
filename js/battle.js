"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./attack");
var energy_type_1 = require("./energy_type");
var pokemon_1 = require("./pokemon");
var resistance_1 = require("./resistance");
var weakness_1 = require("./weakness");
var Lightning = new energy_type_1.EnergyType("Lightning");
var Fire = new energy_type_1.EnergyType("Fire");
var Fighting = new energy_type_1.EnergyType("Fighting");
var Pikachu = new pokemon_1.Pokemon("Pikachu", 80, Lightning, [
    new attack_1.Attack("Electric Ring", Lightning, 50),
    new attack_1.Attack("Pika Punch", Fighting, 20),
], new weakness_1.Weakness(Fire.name, 1.5), new resistance_1.Resistance(Fighting.name, 20));
var Charmander = new pokemon_1.Pokemon("Charmander", 60, Fire, [new attack_1.Attack("Head Butt", Fighting, 10), new attack_1.Attack("Flare", Fire, 30)], new weakness_1.Weakness("Water", 2), new resistance_1.Resistance(Lightning.name, 10));
var lastPokemon;
var alivePokemon = [Pikachu, Charmander];
while (alivePokemon.length > 1) {
    if (!lastPokemon || lastPokemon === Charmander) {
        Pikachu.Attack(Pikachu.attacks[Math.floor(Math.random() * ((Pikachu.attacks.length - 1) - 0 + 1)) + 0], Charmander);
        lastPokemon = Pikachu;
    }
    else {
        Charmander.Attack(Charmander.attacks[Math.floor(Math.random() * ((Charmander.attacks.length - 1) - 0 + 1)) + 0], Pikachu);
        lastPokemon = Charmander;
    }
    alivePokemon.forEach(function (Pokemon) {
        if (!Pokemon.alive) {
            alivePokemon = alivePokemon.slice(alivePokemon.indexOf(Pokemon), 1);
        }
    });
}
//# sourceMappingURL=battle.js.map