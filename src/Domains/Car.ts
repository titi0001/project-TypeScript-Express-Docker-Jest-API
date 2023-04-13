import ICar from '../Interfaces/ICar';
import CarDoorsTypes from '../utils/CarDoorsTypes';
import CarSeatsTypes from '../utils/CarSeatsTypes';
import CarStatusTypes from '../utils/CarStatusTypes';

export default class Car {
  id?: string;
  model: string;
  year: number;
  color: string;
  status: CarStatusTypes.false;
  buyValue: number;
  private _doorsQty: CarDoorsTypes.fourDoors;
  private _seatsQty: CarSeatsTypes.fiveSeats;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }
}