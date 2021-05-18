import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './Searchbar.module.css';
import { SUGGESTIONSURL } from '../../constants/constants';
import Loader from '../Loader/Loader';
import Items from './Items/Items';
import Error from '../Error/Error';

const Searchbar = () => {
    const history = useHistory();
    const [query, setQuery] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const getSuggestions = (SearchQuery) => {
        setLoading(true);
        setSuggestions([]);
        axios
            .get(`${SUGGESTIONSURL}${SearchQuery}`)
            .then((response) => {
                setSuggestions(response.data);
                // console.log(response);
                setError(false);
                setLoading(false);
            })
            .catch(() => {
                console.log('Something wrong!');
                setError(true);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (query) {
            getSuggestions(query);
        }
    }, [query]);

    const onChangeHandler = (e) => {
        if (e.target.value !== '') {
            setQuery(e.target.value);
        }
    };

    let suggestionElements = null;
    if (suggestions) suggestionElements = <Items suggestions={suggestions} />;
    if (loading) suggestionElements = <Loader />;
    if (error) suggestionElements = <Error msg="Something went wrong." />;
    const searchPackHandler = (e) => {
        e.preventDefault();
        history.push(`/package/${query}`);
    };

    return (
        <>
            <form className={styles.Searchbar} onSubmit={searchPackHandler}>
                <BsSearch />
                <input
                    type="text"
                    placeholder="e.g. React"
                    className={styles.Field}
                    onChange={onChangeHandler}
                    onBlur={() => setShowSuggestion(false)}
                    onFocus={() => setShowSuggestion(true)}
                />
            </form>
            <div className={`${styles.Suggestions} ${showSuggestion ? styles.Show : styles.Hide}`}>
                {suggestionElements}
            </div>
        </>
    );
};

export default Searchbar;
