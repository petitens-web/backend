import { Router } from 'express';
import { getUserTransactions, createDeposit, createWithdrawal } from './transaction.controller';
import { authenticateToken } from './auth.middleware';

const router = Router();

router.use(authenticateToken);

router.get('/', getUserTransactions);
router.post('/deposit', createDeposit);
router.post('/withdrawal', createWithdrawal);

export default router;
