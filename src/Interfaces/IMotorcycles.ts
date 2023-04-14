import MotorcyclesEngineTypes from '../utils/MotorcyclesEngineTypes';
import IVehicle from './IVehicles';

export default interface IMotorcycles extends IVehicle {
  category: MotorcyclesEngineTypes;
  engineCapacity: number;
}