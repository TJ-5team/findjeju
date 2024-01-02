import express from 'express';
import * as controller from '../controller/member/memberController.js';


const router = express.Router();

router.get('/', controller.getMember);
router.post('/email', controller.mailCheck);


export default router;