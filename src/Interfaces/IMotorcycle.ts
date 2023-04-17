import MotorcyclesEngineTypes from '../utils/MotorcycleEngineTypes';
import IVehicle from './IVehicle';

export default interface IMotorcycles extends IVehicle {
  category: MotorcyclesEngineTypes;
  engineCapacity: number;
}