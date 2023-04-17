import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
      
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
      
  async create() {
    const newMotorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
      
    try {
      const newMotorcycleCreate = await this.service.createNewMotorcycle(newMotorcycle);
      return this.res.status(201).send(newMotorcycleCreate);
    } catch (error) {
      this.next(error);
    }
  }
      
  async getAllMotorcycle() {
    try {
      const allCars = await this.service.readAll();
      return this.res.status(200).send(allCars);
    } catch (error) {
      this.next(error);
    }
  }
      
  async getById() {
    const { id } = this.req.params;
    try {
      const motorcycleId = await this.service.readById(id);
      return this.res.status(200).send(motorcycleId);
    } catch (error) {
      this.next(error);
    }
  }
      
  async update() {
    const { id } = this.req.params;
    try {
      const updateMotorcycle = await this.service.update(id, this.req.body);
      return this.res.status(200).send(updateMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
      
  async remove() {
    const { id } = this.req.params;
    try {
      await this.service.remove(id);
      return this.res.status(204).send();
    } catch (error) {
      this.next(error);
    }
  }
}