import ICar from '../Interfaces/ICar';

export default class Car {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

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