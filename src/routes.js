import { Router } from 'express';
import BudgetController from './controllers/BudgetControllers';

const routes = new Router();

routes.post('/budget', BudgetController.store);

export default routes;
