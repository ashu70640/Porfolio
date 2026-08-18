import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <h2 id="about-heading" className={styles.heading}>
        About Me
      </h2>
      <div className={styles.grid}>
        <div className={styles.textBlock}>
          <p className={styles.lead}>
  Software Engineer with 3+ years of experience building production billing and
  reconciliation systems on the MERN stack.
</p>

<p>
  I own core billing-calculation and reconciliation-matching logic for a multi-country SaaS
  platform processing 500+ invoices daily at 1K+ requests/day, along with API development for
  a PostgreSQL-backed lease-management platform handling 5K+ requests/day. My work spans
  responsive React/TypeScript interfaces, Node.js/Express APIs, and database design across
  MongoDB, PostgreSQL, and Oracle.
</p>

<p>
  Beyond my day-to-day role, I've integrated LLM APIs (Google Gemini, OpenAI GPT) into
  production features and independently architected JobSphere — a microservices-based job
  application tracker with Redis, Docker, JWT auth, and K6 load testing up to 10K VUs. I focus
  on writing clean, maintainable code and understanding system design tradeoffs behind the
  features I build.
</p>
        </div>
        <div className={styles.highlights}>
          <h3 className={styles.subheading}>Quick highlights</h3>
          <ul className={styles.list} role="list">
  <li>3+ years of professional experience across the MERN stack</li>
  <li>Own billing-calculation and reconciliation logic processing 500+ invoices/day</li>
  <li>Built and load-tested microservices with Redis, Docker, and K6 up to 10K VUs</li>
  <li>Integrated LLM APIs (Google Gemini, OpenAI GPT) into production features</li>
  <li>Working knowledge of system design fundamentals — caching, rate limiting, message queues</li>
</ul>

        </div>
      </div>
    </section>
  );
}

export default About;