import React from 'react';
import styles from './App.module.css';
import Particles from '../../components/Particles/Particles';
import Searchbar from '../../components/Searchbar/Searchbar';

const App = () => (
    <>
        <div className={styles.App}>
            <div className={`container ${styles.Container}`}>
                <Searchbar />
            </div>
            <Particles />
        </div>
    </>
);

export default App;
