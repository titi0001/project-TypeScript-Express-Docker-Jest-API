import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async create() {
    const newCar: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCarCreate = await this.service.createNewCar(newCar);
      return this.res.status(201).send(newCarCreate);
    } catch (error) {
      this.next(error);
    }
  }

  async getAllCar() {
    const allCars = await this.service.readAll();
    return this.res.status(200).send(allCars);
  }

  async getById() {
    const { id } = this.req.params;
    const carId = await this.service.readById(id);
    return this.res.status(200).send(carId);
  }

  async update() {
    const { id } = this.req.params;
    const updateCar = await this.service.update(id, this.req.body);
    return this.res.status(200).send(updateCar);
  }

  async remove() {
    const { id } = this.req.params;
    const removeCar = await this.service.remove(id);
    return this.res.status(200).send(removeCar);
  }
}