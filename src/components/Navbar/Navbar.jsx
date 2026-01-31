import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
const logo = "public/logo.png"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#home" className={styles.logo} onClick={handleLinkClick}>

          <img
            src={logo}
            alt="Ashutosh logo"
            className={styles.logoImage}
          />
        </a>

        <button
          type="button"
          className={`${styles.hamburger} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <ul
          id="main-menu"
          className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
          role="menubar"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} role="none">
              <a
                href={href}
                className={styles.menuLink}
                onClick={handleLinkClick}
                role="menuitem"
              >
                {label}
              </a>
            </li>
          ))}
          <li role="none" className={styles.themeLi}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <span className={styles.themeIcon} aria-hidden="true">
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
