import express from "express";
import * as controller from '../controller/reviewController.js';

const router = express.Router();

router.get('/:contentid/:contenttypeid',controller.getReview)
router.post('/',controller.insertReview);

export default router;