import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarODM';

const NOT_FOUND = 'Car not found';

export default class CarService {
  private model:CarsODM = new CarsODM();
 
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  
  async createNewCar(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }

  async readAll() {
    const cars = await this.model.getAll();
    const allCars = cars.map((car) => this.createCarDomain(car));
    return allCars;
  }

  async readById(id: string) {
    const carById = await this.model.getById(id);
    if (!carById) throw new Error(NOT_FOUND);   
    return this.createCarDomain(carById);
  }

  async update(id: string, car: Partial<ICar>) {
    const updateCar = await this.model.update(id, car);
    if (updateCar) return this.createCarDomain(updateCar);
    throw new Error(NOT_FOUND);
  }

  async remove(id: string) {
    const removeCar = await this.model.remove(id);
    if (removeCar) return this.createCarDomain(removeCar);
    throw new Error(NOT_FOUND);
  }
}