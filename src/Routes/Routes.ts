import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCar(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

routes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).remove(),
);

// routes.post(
//   '/motorcycles',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

// routes.get(
//   '/motorcycles',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

// routes.get(
//   '/motorcycles/:id',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

// routes.put(
//   '/motorcycles/:id',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

// routes.delete(
//   '/motorcycles/:id',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

export default routes;