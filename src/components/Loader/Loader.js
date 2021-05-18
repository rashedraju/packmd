import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.loader}>
        {Array(3)
            .fill()
            .map((el, i) => (
                <div
                    className={`spinner-grow text-dark ${styles.circle}`}
                    role="status"
                    key={i.toString()}
                >
                    <span className="sr-only">Loading...</span>
                </div>
            ))}
    </div>
);

export default Loader;
