import { Router } from 'express';
import { getAllPromotions, getPromotionBySlug, createPromotion } from './promotion.controller';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.get('/', getAllPromotions);
router.get('/:slug', getPromotionBySlug);
router.post('/', authenticateToken, createPromotion);

export default router;
