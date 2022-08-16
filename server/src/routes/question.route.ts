import { Router } from 'express';
import questionController from '../controllers/question.controller';

const router = Router();

router.post('/', questionController.post);
router.put('/:id', questionController.put);
router.delete('/:id', questionController.deleteById);
router.get('/:id', questionController.getById);
router.get('/', questionController.getAll);

export default router;
