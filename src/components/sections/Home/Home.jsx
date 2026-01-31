import { useState } from 'react';
import styles from './Home.module.css';

const PROFILE_IMAGE = 'public/my-passport-photo.png';
const PROFILE_PLACEHOLDER = '/profile-placeholder.svg';

function Home() {
  const [profileSrc, setProfileSrc] = useState(PROFILE_IMAGE);

  const handleImageError = () => setProfileSrc(PROFILE_PLACEHOLDER);

  return (
    <section id="home" className={styles.home} aria-labelledby="home-heading">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I'm</p>
        <h1 id="home-heading" className={styles.name}>
          Ashutosh
        </h1>
        <p className={styles.role}>Software Engineer</p>
        <p className={styles.summary}>
          Software Developer with 2.5 years of experience building and maintaining web applications
  using React.js and Node.js, with a focus on clean and maintainable code.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.ctaPrimary}>
            View Projects
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get in Touch
          </a>
        </div>
        </div>
        <div className={styles.profileWrapper}>
          <img
            src={profileSrc}
            alt="Profile"
            className={styles.profileImage}
            onError={handleImageError}
            width={280}
            height={280}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
