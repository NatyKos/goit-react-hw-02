import css from './Notification.module.css';
export default function Notification({ total }) {
  if (total === 0) {
    return <p className={css.notification}>No feedback yet</p>;
  }
}
