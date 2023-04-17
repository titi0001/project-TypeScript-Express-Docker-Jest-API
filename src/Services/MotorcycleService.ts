import Motorcycle from '../Domains/Motorcycle';
import IdNotFoundMotorcycle from '../Erros/IdNotFoundMotorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcycleODM';

const NOT_FOUND = 'Motorcycle not found';

export default class MotorcyclesService {
  private model:MotorcyclesODM = new MotorcyclesODM();
 
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
  
  async createNewMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async readAll() {
    const motorcycles = await this.model.getAll();
    const allMotorcycle = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return allMotorcycle;
  }

  async readById(id: string) {
    const motorcycleById = await this.model.getById(id);
    if (!motorcycleById) throw new IdNotFoundMotorcycle(NOT_FOUND);   
    return this.createMotorcycleDomain(motorcycleById);
  }

  async update(id: string, motorcycle: Partial<IMotorcycle>) {
    const updateMotorcycle = await this.model.update(id, motorcycle);
    if (updateMotorcycle) return this.createMotorcycleDomain(updateMotorcycle);
    throw new IdNotFoundMotorcycle(NOT_FOUND);
  }

  async remove(id: string) {
    const removeMotorcycle = await this.model.remove(id);
    if (removeMotorcycle) return this.createMotorcycleDomain(removeMotorcycle);
    throw new IdNotFoundMotorcycle(NOT_FOUND);
  }
}