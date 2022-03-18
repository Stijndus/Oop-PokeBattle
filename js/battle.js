"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./attack");
var energy_type_1 = require("./energy_type");
var pokemon_1 = require("./pokemon");
var resistance_1 = require("./resistance");
var weakness_1 = require("./weakness");
var Lightning = new energy_type_1.EnergyType('Lightning');
var Fire = new energy_type_1.EnergyType('Fire');
var Fighting = new energy_type_1.EnergyType('Fighting');
var Water = new energy_type_1.EnergyType('Water');
var Pikachu = new pokemon_1.Pokemon('Pikachu', 80, Lightning, [
    new attack_1.Attack('Electric Ring', Lightning, 50),
    new attack_1.Attack('Pika Punch', Fighting, 20),
], new weakness_1.Weakness(Fire.name, 1.5), new resistance_1.Resistance(Fighting.name, 20));
var Charmander = new pokemon_1.Pokemon('Charmander', 60, Fire, [new attack_1.Attack('Head Butt', Fighting, 10), new attack_1.Attack('Flare', Fire, 30)], new weakness_1.Weakness(Water.name, 2), new resistance_1.Resistance(Lightning.name, 10));
var Piplup = new pokemon_1.Pokemon('Piplup', 100, Water, [new attack_1.Attack('Tackle', Fighting, 10), new attack_1.Attack('Water Splash', Water, 30)], new weakness_1.Weakness(Lightning.name, 1.5), new resistance_1.Resistance(Fire.name, 15));
var lastPokemon;
var pokemons = [Pikachu, Charmander, Piplup];
while (pokemons.length > 1) {
    pokemons.forEach(function (pokemon, index) {
        if (!pokemon.alive) {
            pokemons.splice(index, 1);
        }
        else {
            if (index === pokemons.length - 1) {
                pokemon.Attack(pokemon.attacks[Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0], pokemons[0]);
            }
            else {
                pokemon.Attack(pokemon.attacks[Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0], pokemons[index + 1]);
            }
        }
    });
}
//# sourceMappingURL=battle.js.map