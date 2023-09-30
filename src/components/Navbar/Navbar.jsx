import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <NavLink
            to='/about'
            style={{ textDecoration: 'none', color: 'var(--text-color)' }}
          >
            About
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to='/preferences'
            style={{ textDecoration: 'none', color: 'var(--text-color)' }}
          >
            Preferences
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to='/feedback'
            style={{ textDecoration: 'none', color: 'var(--text-color)' }}
          >
            Feedback
          </NavLink>
        </li>
      </ul>
      <div className={styles.cta}>
        <Button>
          <NavLink
            to='/login'
            style={{ textDecoration: 'none', color: 'var(--text-color)' }}
          >
            Sign In
          </NavLink>
        </Button>
        <Button style={{ border: '1px solid var(--secondary)' }}>
          <NavLink
            to='/register'
            style={{ textDecoration: 'none', color: 'var(--text-color)' }}
          >
            Sign Up
          </NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
