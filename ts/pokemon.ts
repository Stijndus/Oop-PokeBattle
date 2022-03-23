import { Attack } from "./attack";
import { EnergyType } from "./energy_type";
import { Resistance } from "./resistance";
import { Weakness } from "./weakness";

export class Pokemon {
  public name: string;
  public maxHealth: number;
  public currentHealth: number;
  public type: EnergyType;
  public weakness: Weakness;
  public attacks: Attack[];
  public resistance: Resistance;

  public alive: boolean;

  constructor(
    name,
    maxHealth,
    energyType,
    attacks,
    weakness: Weakness,
    resistance: Resistance
  ) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = this.maxHealth;
    this.type = energyType;
    this.attacks = attacks;
    this.weakness = weakness;
    this.resistance = resistance;
    this.alive = true;
  }

  public Attack(attack: Attack, defender: Pokemon) {
    console.log(`${defender.name}'s health is ${defender.currentHealth}`);
    let currentDamage: number;
    if (attack.energyType.name === defender.weakness.name) {
      currentDamage = attack.baseDamage * defender.weakness.multiplier;
      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${currentDamage} and was very effective!`
      );
      defender.TakeDamage(currentDamage);
    } else if (attack.energyType.name === defender.resistance.name) {
      currentDamage = attack.baseDamage - defender.resistance.value;
      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${currentDamage} and was not very effective!`
      );
      defender.TakeDamage(currentDamage);
    } else {
      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${attack.baseDamage}!`
      );
      defender.TakeDamage(attack.baseDamage);
    }
  }

  private TakeDamage(damage: number) {
    if(damage < 0) return console.log(`${this.name} dodged the attack!`)
    this.currentHealth -= damage;
    if (this.currentHealth <= 0) {
      this.Die();
    } else {
      console.log(`${this.name} has ${this.currentHealth} HP`);
    }
  }

  private Die() {
    this.alive = false;
    console.log(`${this.name} has fainted`);
  }
}
