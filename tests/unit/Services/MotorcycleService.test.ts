import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const INVALID_MONGO_ID = 'Invalid mongo id';

describe('Teste da Camada Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  const motorcycleInputMock: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  const motorcycleOutputMock: Motorcycle = new Motorcycle({
    id: '643d6f75a6fe1914b4003c4e',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  });

  it('Verifica sem consegue retornar uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutputMock);

    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(motorcycleInputMock);

    expect(result).to.be.deep.equal(motorcycleOutputMock);
  });

  it('Verifica que não e possível criar uma moto', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(motorcycleInputMock);

    expect(result).to.be.deep.equal(null);
  });

  it('Verifica se lista todas as Motos', async function () {
    const outputMock: Motorcycle[] = [new Motorcycle({
      id: '643d6f75a6fe1914b4003c4e',
      model: 'Honda Cb 600f Hornets',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    })];

    sinon.stub(Model, 'find').resolves(outputMock);

    const service = new MotorcycleService();
    const result = await service.readAll();

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Verifica se e possível listar carro com ID no banco de dados', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutputMock);

    const service = new MotorcycleService();
    const result = await service.readById('643d6f75a6fe1914b4003c4e');

    expect(result).to.deep.equal(motorcycleOutputMock);
  });

  it('Verifica se retorna erro casso o ID esta em formato errado', async function () {
    try {
      const service = new MotorcycleService();
      await service.readById('634852326b35b59438fbea2');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(INVALID_MONGO_ID);
    }
  });

  it('Verifica se e possível atualizar uma moto com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutputMock);
    const service = new MotorcycleService();
    const result = await service.update('634852326b35b59438fbea2f', motorcycleInputMock);
    expect(result).to.be.deep.equal(motorcycleOutputMock);
  });
});