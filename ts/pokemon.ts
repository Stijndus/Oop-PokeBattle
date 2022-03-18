import { Attack } from './attack';
import { EnergyType } from './energy_type'
import { Weakness } from './weakness'

export class Pokemon {

  public name: string;
  public maxHealth: number;
  public currentHealth: number;
  public type: EnergyType;
  public weakness: Weakness;
  public attacks: Attack[];

  constructor(name, maxHealth, energyType, weakness, attacks) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth =  this.maxHealth;
    this.type = energyType;
    this.weakness = weakness;
    this.attacks = attacks
  }
}
