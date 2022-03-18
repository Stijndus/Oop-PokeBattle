import { EnergyType } from "./energy_type";

export class Attack {

    public name: string;
    public energyType: EnergyType;
    public baseDamage: Number;
    constructor(name: string, energyType: EnergyType, baseDamage: number){
        this.name = name;
        this.energyType = energyType;
        this.baseDamage = baseDamage;
    }
}