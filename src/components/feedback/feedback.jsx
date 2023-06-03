import css from './feedback.module.css';

export const Feedback = ({ onLeaveFeedback }) => (
  <div className={css.btnContainer}>
    <button
      name="good"
      className={css.Bntfeeedback}
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      name="neutral"
      className={css.Bntfeeedback}
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      name="bad"
      className={css.Bntfeeedback}
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);
