import MotorcyclesEngineTypes from '../utils/MotorcyclesEngineTypes';
import IVehicle from './IVehicle';

export default interface IMotorcycles extends IVehicle {
  category: MotorcyclesEngineTypes;
  engineCapacity: number;
}