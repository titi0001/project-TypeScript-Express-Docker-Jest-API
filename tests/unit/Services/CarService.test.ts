import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const INVALID_MONGO_ID = 'Invalid mongo id';

describe('Teste da Camada Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  const carInputMock: ICar = {
    model: 'Marea',
    year: 1992,
    color: 'Black',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  };
  const carOutputMock: Car = new Car({
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 1992,
    color: 'Black',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  });

  it('Verifica sem consegue retornar um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carOutputMock);

    const service = new CarService();
    const result = await service.createNewCar(carInputMock);

    expect(result).to.be.deep.equal(carOutputMock);
  });

  it('Verifica que não e possível criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new CarService();
    const result = await service.createNewCar(carInputMock);

    expect(result).to.be.deep.equal(null);
  });

  it('Verifica se lista todos os carros', async function () {
    const outputMock: Car[] = [new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Black',
      status: true,
      buyValue: 10.990,
      doorsQty: 2,
      seatsQty: 5,
    })];

    sinon.stub(Model, 'find').resolves(outputMock);

    const service = new CarService();
    const result = await service.readAll();

    expect(result).to.be.deep.equal(outputMock);
  });

  it('Verifica se e possível listar carro com ID no banco de dados', async function () {
    sinon.stub(Model, 'findById').resolves(carOutputMock);

    const service = new CarService();
    const result = await service.readById('634852326b35b59438fbea2f');

    expect(result).to.deep.equal(carOutputMock);
  });

  it('Verifica se retorna erro casso o ID esta em formato errado', async function () {
    try {
      const service = new CarService();
      await service.readById('634852326b35b59438fbea2');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(INVALID_MONGO_ID);
    }
  });

  it('Verifica se e possível atualizar um carro com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutputMock);
    const service = new CarService();
    const result = await service.update('634852326b35b59438fbea2f', carInputMock);
    expect(result).to.be.deep.equal(carOutputMock);
  });
});