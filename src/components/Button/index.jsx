import styles from './page.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.buy__button}>
      {children}
    </button>
  );
};

export default Button;