import { Router } from 'express';
import { getAllGames, getGameBySlug, getJackpotGames, createGame } from './game.controller';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.get('/', getAllGames);
router.get('/jackpots', getJackpotGames);
router.get('/:slug', getGameBySlug);
router.post('/', authenticateToken, createGame);

export default router;
