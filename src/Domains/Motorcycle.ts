import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleEngineTypes from '../utils/MotorcycleEngineTypes';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: MotorcycleEngineTypes;
  private engineCapacity: number;

  constructor({ 
    model, year, color, buyValue, category, engineCapacity, id, status }: IMotorcycle) {
    super({ model, year, color, buyValue, id, status });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}