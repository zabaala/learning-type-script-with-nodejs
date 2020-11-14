import { Router } from 'express';
import userController from './Controllers/UserController';
const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello, World.');
});

router.get('/users', userController.index);
router.get('/users/:user(\\d+)/notify', userController.notify);

export default router;