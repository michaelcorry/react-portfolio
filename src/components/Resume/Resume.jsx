import React from 'react'
import styles from './Resume.module.css'

export const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      <div className={styles.sectionHeading}>
        <h2 className={styles.title}>Resume</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <p>
            Download a copy of my resume or open it in a new tab. If you need a
            tailored version for a role, just reach out.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href="/resume.pdf" download>
              Download Resume
            </a>
            <a className={styles.secondaryBtn} href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
