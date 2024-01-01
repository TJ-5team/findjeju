import express from 'express';
import * as controller from '../controller/uploadController.js';

const router = express.Router();

router.post('/', controller.upload);

export default router;