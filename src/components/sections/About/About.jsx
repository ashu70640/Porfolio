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
  Software Developer with 2.5 years of experience building and maintaining web applications
  using React.js and Node.js.
</p>

<p>
  I have hands-on experience developing responsive user interfaces with React, Redux, and
  modern JavaScript, along with building backend services using Node.js and Express. My work
  involves integrating RESTful APIs, managing frontend–backend data flow, and delivering
  production-ready features across multiple modules.
</p>

<p>
  In my current role, I have contributed to end-to-end feature development, performance
  improvements using React Hooks, and dashboard implementations for real-world business
  use cases such as billing and tenant management systems. I work in Agile environments and
  focus on writing clean, maintainable code.
</p>
        </div>
        <div className={styles.highlights}>
          <h3 className={styles.subheading}>Quick highlights</h3>
          <ul className={styles.list} role="list">
  <li>2+ years of professional experience with React.js and Node.js</li>
  <li>Built and delivered production features using REST APIs and modern JavaScript</li>
  <li>Experience with Redux, React Hooks, and performance optimization techniques</li>
  <li>Worked in Agile teams with exposure to HLD and LLD concepts</li>
</ul>

        </div>
      </div>
    </section>
  );
}

export default About;
