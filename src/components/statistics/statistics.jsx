import css from '../feedback/feedback.module.css';
import { Notification } from '../notification/notification.jsx';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      {total > 0 ? (
        <div>
          <p> Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage || 0} %</p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
