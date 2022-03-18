import { Attack } from './attack'
import { EnergyType } from './energy_type'
import { Resistance } from './resistance'
import { Weakness } from './weakness'

export class Pokemon {
  public name: string
  public maxHealth: number
  public currentHealth: number
  public type: EnergyType
  public weakness: Weakness
  public attacks: Attack[]
  public resistance: Resistance

  constructor(
    name,
    maxHealth,
    energyType,
    attacks,
    weakness: Weakness,
    resistance: Resistance,
  ) {
    this.name = name
    this.maxHealth = maxHealth
    this.currentHealth = this.maxHealth
    this.type = energyType
    this.attacks = attacks
    this.weakness = weakness
    this.resistance = resistance
  }

  public Attack(attack: Attack, defender: Pokemon) {
    console.log(`${defender.name}'s health is ${defender.currentHealth}`)
    let currentDamage: number
    if (attack.energyType.name === defender.weakness.name) {
      currentDamage = attack.baseDamage * defender.weakness.multiplier

      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${currentDamage} and was very effective!`,
      )
      defender.TakeDamage(currentDamage)
    } else if (attack.energyType.name === defender.resistance.name) {
      currentDamage = attack.baseDamage - defender.resistance.value

      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${currentDamage} and was not very effective!`,
      )
      defender.TakeDamage(currentDamage)
    } else {
      console.log(
        `${this.name} attack ${defender.name} with ${attack.name}, did ${currentDamage}!`,
      )
      defender.TakeDamage(attack.baseDamage)
    }
  }

  private TakeDamage(damage: number) {
    this.currentHealth -= damage
    console.log(`${this.name} heeft nu ${this.currentHealth} HP`)
  }

  /**
   * getPopulation
   */
  public getPopulation() {
    
  }
}
