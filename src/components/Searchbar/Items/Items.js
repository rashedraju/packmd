import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Items.module.css';

const Items = ({ suggestions }) =>
    suggestions.map((el) => (
        <div className={`${styles.SuggestionItem}`} key={el.package.name}>
            <NavLink to={`/package/${el.package.name}`} className={styles.SuggestionName}>
                {el.package.name}
            </NavLink>
            <small>{el.package.description}</small>
        </div>
    ));

export default Items;
