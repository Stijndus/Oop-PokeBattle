import { Attack } from './attack';
import { EnergyType } from './energy_type'
import { Resistance } from './resistance';
import { Weakness } from './weakness'

export class Pokemon {

  public name: string;
  public maxHealth: number;
  public currentHealth: number;
  public type: EnergyType;
  public weakness: Weakness;
  public attacks: Attack[];
  public resistance: Resistance; 

  constructor(name, maxHealth, energyType,  attacks, weakness: Weakness, resistance: Resistance) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth =  this.maxHealth;
    this.type = energyType;
    this.attacks = attacks;
    this.weakness = weakness;
    this.resistance = resistance;
  }

  private DealDamage(attack: Attack, defender: Pokemon){
    
  }

  private TakeDamage(damage: number){
    this.currentHealth -= damage;
    console.log(`${this.name} heeft nu ${this.currentHealth} HP`)
  }
}
