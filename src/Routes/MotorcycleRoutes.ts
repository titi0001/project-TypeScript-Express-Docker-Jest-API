import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).getAllMotorcycle(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).getById(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).update(),
);

routes.delete(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).remove(),
);

export default routes;