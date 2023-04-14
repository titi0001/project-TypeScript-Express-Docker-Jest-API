import {
  isValidObjectId,
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

const INVALID_MONGO_ID = 'Invalid Mongo id';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(INVALID_MONGO_ID);

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    );
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T[] | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_MONGO_ID);
    return this.model.find({ id });
  }

  public async remove(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_MONGO_ID);

    return this.model.findByIdAndDelete(id);
  }
}