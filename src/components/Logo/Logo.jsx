import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <p className={styles.logo}>
        Book<span>Finder</span>.com
      </p>
    </Link>
  );
}

export default Logo;
