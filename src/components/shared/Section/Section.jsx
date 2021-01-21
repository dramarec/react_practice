import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
    return (
        <section className={styles.section}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
