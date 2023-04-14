import IVehicle from './IVehicles';

export default interface ICar extends IVehicle{
  doorsQty: number;
  seatsQty: number;
}
