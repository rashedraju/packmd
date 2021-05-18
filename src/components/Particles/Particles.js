import React from 'react';
import Particles from 'react-particles-js';
import styles from './Particles.module.css';

const ParticlesBG = ({ children }) => (
    <>
        <Particles
            className={styles.Particles}
            params={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            value_area: 2000,
                        },
                    },
                    move: {
                        speed: 0.5,
                    },
                },
            }}
        />
        {children}
    </>
);
export default ParticlesBG;
