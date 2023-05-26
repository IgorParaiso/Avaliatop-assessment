import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import isAuthenticated from '../middlewares/isAuthenticated';

const AuthRoutes = Router();

AuthRoutes.post('/auth/login', AuthController.login);

AuthRoutes.post('/auth/register', AuthController.register);

AuthRoutes.get('/auth/refresh', isAuthenticated, AuthController.refresh);

AuthRoutes.post('/auth/forgot', AuthController.forgot);

export default AuthRoutes;
