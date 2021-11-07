import React from 'react';
import styles from './Home.module.css';
import Particles from '../../components/Particles/Particles';
import Searchbar from '../../components/Searchbar/Searchbar';

const Home = () => (
    <>
        <div className={styles.Home}>
            <div className={`container ${styles.Container}`}>
                <Searchbar />
            </div>
            <Particles />
        </div>
    </>
);

export default Home;
