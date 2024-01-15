import express from "express";
import * as controller from '../controller/reviewController.js';

const router = express.Router();

router.delete('/remove/:rid',controller.removeReview);
router.get('/:contentid/:contenttypeid',controller.getReview);
router.get('/:mid',controller.userReview);
router.post('/',controller.insertReview);

export default router;