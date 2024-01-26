import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import styles from '../styles/pages/aboutPage.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.appTitle}>Movie App &mdash; TMDB</h3>
      <p>
        Projecto creado con The Movie Database (TMDB), ReactJS, React Query,
        Axios y Style Components.
      </p>
      <p>Version: 1.0.0</p>

      <Link to={'/'}>
        <button className={styles.btn}>
          <AiFillHome /> back to home
        </button>
      </Link>
    </div>
  );
};

export default About;
