import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Particles from '../../components/Particles/Particles';
import styles from './Details.module.css';
import PackContainer from './PackContainer/PackContainer';

const Package = () => (
    <>
        <div className={styles.Searchbar}>
            <div className={`container ${styles.Container}`}>
                <Searchbar />
            </div>
            <Particles />
        </div>
        <div className="container">
            <PackContainer />
        </div>
    </>
);

export default Package;
