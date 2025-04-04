import { useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbacks).reduce(
    (acc, item) => acc + item,
    0
  );

  const handleResetClick = () => {
    setFeedbacks(initialFeedbacks);
  };
  return (
    <Container>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedbacksData={Object.keys(feedbacks)}
        handleResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </Container>
  );
};

export default App;
