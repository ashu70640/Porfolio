import styles from './Contact.module.css';

const SOCIAL_LINKS = [
  { href: 'mailto:ashu70640@gmail.com', label: 'Email', value: 'ashu70640@gmail.com' },
  {
    href: 'https://www.linkedin.com/in/ashutosh-772285190',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashutosh',
  },
];

function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>
        Contact
      </h2>

      <div className={styles.grid}>
        {/* LEFT — primary contact info */}
        <div className={styles.info}>
          <p className={styles.lead}>
            I’m open to new opportunities and professional conversations.
            You can reach me via email or LinkedIn.
          </p>

          <ul className={styles.socialList} role="list">
            {SOCIAL_LINKS.map(({ href, label, value }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={styles.socialLink}
                >
                  <strong>{label}:</strong> {value}
                </a>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
  );
}

export default Contact;
