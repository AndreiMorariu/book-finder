import styles from './Button.module.css';

function Button({ children, style, onClick }) {
  return (
    <button
      className={styles.btn}
      style={style}
      onClick={() => onClick((prev) => !prev)}
    >
      {children}
    </button>
  );
}

export default Button;
