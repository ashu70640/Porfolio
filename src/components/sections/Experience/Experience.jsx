import { experience } from '../../../data/experience';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.heading}>
        Experience
      </h2>
      <div className={styles.timeline} role="list">
        {experience.map((job) => (
          <article
            key={job.id}
            className={styles.job}
            role="listitem"
          >
            <div className={styles.jobHeader}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.role}>{job.role}</p>
              <p className={styles.duration}>{job.duration}</p>
            </div>
            <ul className={styles.responsibilities} aria-label="Responsibilities">
              {job.responsibilities.map((item, index) => (
                <li key={index} className={styles.responsibility}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
