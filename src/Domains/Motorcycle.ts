import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesEngineTypes from '../utils/MotorcyclesEngineTypes';
import Vehicle from './Vehicle';

export default class Motorcycles extends Vehicle {
  private category: MotorcyclesEngineTypes;
  private engineCapacity: number;

  constructor({ 
    model, year, color, buyValue, category, engineCapacity, id, status }: IMotorcycles) {
    super({ model, year, color, buyValue, id, status });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}