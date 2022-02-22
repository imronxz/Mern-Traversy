import moment from 'moment';
import 'moment/locale/id';
//* react-icons
import { FaTrashAlt, FaCalendarAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/Goals/GoalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>
        <FaCalendarAlt />
        {moment(goal.createdAt).format('llll')}
      </div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="btn btn-block">
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default GoalItem;
