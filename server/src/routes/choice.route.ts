import { Router } from 'express';
import choiceController from '../controllers/choice.controller';

const router = Router();

router.post('/', choiceController.post);
router.put('/:id', choiceController.put);
router.delete('/:id', choiceController.deleteById);
router.get('/:id', choiceController.getById);
router.get('/', choiceController.getAll);

export default router;
