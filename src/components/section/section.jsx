import css from '../feedback/feedback.module.css';
import { Feedback } from '../feedback/feedback.jsx';
import { Statistics } from '../statistics/statistics.jsx';
import { Notification } from '../notification/notification.jsx';
export const Section = ({
  title,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={css.mainContainer}>
      <h4>{title}</h4>
      <Feedback onLeaveFeedback={onLeaveFeedback} />
      <h4>Statististics</h4>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={positivePercentage}
        />
      
        
      
    </div>
  );
};
