import PropTypes from 'prop-types';
import styles from './Task.module.css'
const Task = (props) => {
  const {
    dataTask: { text, days, isDone }, setDoneTask
  } = props;
  const setDone = () => setDoneTask()
  return (
    <div className={styles.task}>
      <p style={{ color: isDone ? 'green' : 'red' }}>{text}</p>
      <p>днів на виконання: {days + 1}</p>
      <button onClick={setDone}>виконано</button>
    </div>
  );
};

Task.propTypes = {
  dataTask: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    isDone: PropTypes.bool,
  }),
};

export default Task;
