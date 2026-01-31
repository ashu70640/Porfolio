import { skillsByCategory } from '../../../data/skills';
import styles from './Skills.module.css';

const categoryOrder = ['frontend', 'backend', 'databases','cloudAndHosting','toolsAndPlatforms'];

function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.heading}>
        Skills
      </h2>
      <div className={styles.grid}>
        {categoryOrder.map((key) => {
          const category = skillsByCategory[key];
          if (!category) return null;
          return (
            <div
              key={key}
              className={styles.category}
              aria-labelledby={`skills-${key}`}
            >
              <h3 id={`skills-${key}`} className={styles.categoryTitle}>
                {category.label}
              </h3>
              <ul className={styles.skillList} role="list">
                {category.items.map((item) => (
                  <li key={item} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
