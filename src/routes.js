import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ this: 'ok' }));

export default routes;
