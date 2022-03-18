import { Attack } from "./attack";
import { EnergyType } from "./energy_type";
import { Pokemon } from "./pokemon";
import { Resistance } from "./resistance";
import { Weakness } from "./weakness";

const Lightning = new EnergyType("Lightning");
const Fire = new EnergyType("Fire");
const Fighting = new EnergyType("Fighting");


const Pikachu = new Pokemon(
    "Pikachu",
    80,
    Lightning,
    [
      new Attack("Electric Ring", Lightning, 50),
      new Attack("Pika Punch", Fighting, 20),
    ],
    new Weakness(Fire.name, 1.5),
    new Resistance(Fighting.name, 20)
  );
  const Charmander = new Pokemon(
    "Charmander",
    60,
    Fire,
    [new Attack("Head Butt", Fighting, 10), new Attack("Flare", Fire, 30)],
    new Weakness("Water", 2),
    new Resistance(Lightning.name, 10)
  );

var lastPokemon: Pokemon;
var alivePokemon: Pokemon[] = [Pikachu, Charmander];






while (alivePokemon.length > 1) {
    if(!lastPokemon){
        alivePokemon[0].Attack(alivePokemon[0].attacks[Math.floor(Math.random() * ((alivePokemon[0].attacks.length - 1) - 0 + 1)) + 0], alivePokemon[(alivePokemon.indexOf(lastPokemon) + 1)]);
        lastPokemon = alivePokemon[0];
    } else if(){
        Charmander.Attack(Charmander.attacks[Math.floor(Math.random() * ((Charmander.attacks.length - 1) - 0 + 1)) + 0], Pikachu);
        lastPokemon = Charmander;
    }
    alivePokemon.forEach(Pokemon => {
        if(!Pokemon.alive){
            alivePokemon = alivePokemon.slice(alivePokemon.indexOf(Pokemon), 1);
        }
    });
    
}
