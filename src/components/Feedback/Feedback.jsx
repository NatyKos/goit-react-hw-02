import css from './Feedback.module.css';
export default function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}
