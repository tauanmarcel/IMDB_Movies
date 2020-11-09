import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MovieController from './app/controllers/MovieController';
import AvaliationController from './app/controllers/AvaliationController';

const routes = new Router();

/* Cria um usuário */
routes.post('/users', UserController.store);

/* Cria uma sessão para o usuário */
routes.post('/sessions', SessionController.store);

/* Filtro de Autenticação */
routes.use(authMiddleware);

/* Rotas de Usuários */
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.get('/admin', UserController.findAdmin);
routes.delete('/users/:id', UserController.delete);

/* Rotas para os Filmes */
routes.get('/movie', MovieController.show);
routes.post('/movie', MovieController.store);

/* Rotas para Avaliação */
routes.post('/avaliation/:movies_id', AvaliationController.store);

export default routes;
