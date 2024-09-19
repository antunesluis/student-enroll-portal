import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rota completa -> /users/
router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
METODOS UTILIZADOS PELOS CONTROLLERS (NAO DEVE POSSUR MAIS QUE ISSO)
- index -> lista todos os usuários -> GET
- store/create -> cria um novo usuário -> POST
- delete -> apaga um usuário -> DELETE 
- show -> mostra um usuário -> GET 
- update -> atualiza um usuário -> PATCH ou PUT
*/
