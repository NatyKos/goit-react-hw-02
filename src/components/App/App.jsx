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
  const handleClick = selected => {
    const updateClicks = { ...clicks };
    updateClicks[selected] += 1;
    setClicks(updateClicks);
    console.log(updateClicks);
  };
  return (
    <>
      <Description />
      <Options onUpdate={handleClick} />
      <Feedback feedback={clicks} />
    </>
  );
}
