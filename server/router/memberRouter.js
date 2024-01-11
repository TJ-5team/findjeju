import express from 'express';
import * as joinController from '../controller/member/joinController.js';
import * as loginController from '../controller/member/loginController.js';


const router = express.Router();

/* join */
router.get('/', joinController.getMember);
router.post('/email', joinController.mailCheck);
router.post('/signup', joinController.signUp);

/* login */
router.post('/login', loginController.userLogin);

export default router;