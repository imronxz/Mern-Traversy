import express from 'express';
const router = express.Router();
import { getGoals, postGoals, updateGoals, deleteGoals  } from '../controllers/GoalsControllers.js';

import protect from '../middleware/authMiddleware.js'

/* // TODO: CRUD REST API
router.get('/', getGoals); // GET /api/goals
router.post('/', postGoals); // POST /api/goals
router.put('/:id', updateGoals); // PUT /api/goals/:id
router.delete('/:id', deleteGoals); // DELETE /api/goals/:id
*/


// TODO: CRUD REST API Multiple Routes
router.route('/').get(protect, getGoals).post(protect, postGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

export default router;
