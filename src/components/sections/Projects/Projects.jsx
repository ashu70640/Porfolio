import { projects } from '../../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className={styles.heading}>
        Projects
      </h2>
      <div className={styles.grid} role="list">
        {projects.map((project) => (
          <article
            key={project.id}
            className={styles.card}
            role="listitem"
          >
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <ul className={styles.techList} aria-label="Tech stack">
              {project.techStack.map((tech) => (
                <li key={tech} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.links}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`View ${project.title} on GitHub`}
              >
                GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`View live ${project.title}`}
              >
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
