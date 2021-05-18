import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dependencies.module.css';
import Error from '../Error/Error';

const Dependencies = ({ dependencies, devDependencies }) => {
    const elements = (items) =>
        items.length ? (
            items.map((item) => (
                <NavLink to={`/package/${item}`} className={styles.Item} key={item}>
                    {item}
                </NavLink>
            ))
        ) : (
            <Error msg="Dependencies not found." />
        );
    return (
        <>
            <h3>Dependencies{dependencies.length && `(${dependencies.length})`}</h3>
            <div> {elements(dependencies)} </div>
            <hr />
            <h3>Dev Dependencies{devDependencies.length && `(${devDependencies.length})`}</h3>
            <hr />
            <div> {elements(devDependencies)} </div>
        </>
    );
};

export default Dependencies;
