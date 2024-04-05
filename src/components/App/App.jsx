import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    const updateClicks = { ...clicks };
    updateClicks[feedbackType] += 1;
    setClicks(updateClicks);
  };
  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} />
      <Feedback feedback={clicks} />
    </>
  );
}
