import styles from 'styles/components/spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.background}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
