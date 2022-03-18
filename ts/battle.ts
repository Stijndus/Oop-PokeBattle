import { Attack } from './attack'
import { EnergyType } from './energy_type'
import { Pokemon } from './pokemon'
import { Resistance } from './resistance'
import { Weakness } from './weakness'

const Lightning = new EnergyType('Lightning');
const Fire = new EnergyType('Fire');
const Fighting = new EnergyType('Fighting');
const Water = new EnergyType('Water');

const Pikachu = new Pokemon(
  'Pikachu',
  80,
  Lightning,
  [
    new Attack('Electric Ring', Lightning, 50),
    new Attack('Pika Punch', Fighting, 20),
  ],
  new Weakness(Fire.name, 1.5),
  new Resistance(Fighting.name, 20),
)
const Charmander = new Pokemon(
  'Charmander',
  60,
  Fire,
  [new Attack('Head Butt', Fighting, 10), new Attack('Flare', Fire, 30)],
  new Weakness(Water.name, 2),
  new Resistance(Lightning.name, 10),
)

const Piplup = new Pokemon(
  'Piplup',
  100,
  Water,
  [new Attack('Tackle', Fighting, 10), new Attack('Water Splash', Water, 30)],
  new Weakness(Lightning.name, 1.5),
  new Resistance(Fire.name, 15)
)

var lastPokemon: Pokemon[]
var pokemons: Pokemon[] = [Pikachu, Charmander, Piplup]

while (pokemons.length > 1) {
  pokemons.forEach((pokemon, index) => {
    if (!pokemon.alive) {
      pokemons.splice(index, 1)
    } else {
      if (index === pokemons.length - 1) {
        pokemon.Attack(
          pokemon.attacks[
            Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
          ],
          pokemons[0],
        )
      } else {
        pokemon.Attack(
          pokemon.attacks[
            Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
          ],
          pokemons[index + 1],
        )
      }
    }
  })
}
