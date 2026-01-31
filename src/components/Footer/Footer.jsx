import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {CURRENT_YEAR} Ashutosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
