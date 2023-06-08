import { Component } from 'react';

import { Section } from './section/section.jsx';
import { Feedback } from './feedback/feedback.jsx';
import { Notification } from './notification/notification.jsx';
import { Statistics } from './statistics/statistics.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (partialSum, a) => partialSum + a,
      0
    );
  };
  positivePercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const obj = Object.keys(this.state);
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback"/>
          <Feedback
            onLeaveFeedback={this.onLeaveFeedback}
            options={obj} />
       
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
         {/* </Section> */}
      </div>
    );
  }
}

export default App;
