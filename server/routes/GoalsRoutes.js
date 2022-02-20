import express from 'express';
const router = express.Router();
import { getGoals, postGoals, updateGoals, deleteGoals  } from '../controllers/GoalsControllers.js';



/* // TODO: CRUD REST API
router.get('/', getGoals); // GET /api/v1/goals
router.post('/', postGoals); // POST /api/v1/goals
router.put('/:id', updateGoals); // PUT /api/v1/goals/:id
router.delete('/:id', deleteGoals); // DELETE /api/v1/goals/:id
*/

// TODO: CRUD REST API Multiple Routes
router.route('/').get(getGoals).post(postGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

export default router;
