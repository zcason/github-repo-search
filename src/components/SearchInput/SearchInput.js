import React, { useState } from 'react';
import Select from 'react-select';
import { languageOptions, sortOptions } from './SearchInputUtils';
import { useDispatch } from 'react-redux';
import { retriveResults } from '../../redux/actions';
import getResults from '../../services/searchService';
import './SearchInput.css';

function SearchInput() {
    const [repoName, setRepoName] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [error, setError] = useState(null);
    const disptach = useDispatch();
    const submitForm = async (event) => {
        event.preventDefault();
        // Replaces all spaces with a "+" symbol
        const name = repoName.replace(/\s/g, "+");

        // Checks to see if there's atleast one character in the input field
        if (name === "") {
            setError("Please enter a valid name!");
        } else {
            const results = await getResults(name, language, sortBy)
            disptach(retriveResults(results));
            setError(null);
        }
    };

    return (
        <div className="search-form">
            <form onSubmit={submitForm}>
                <input
                    className="search-input"
                    onChange={e => setRepoName(e.target.value)}
                    placeholder={"Enter Repo Name"}
                    type="text"
                    required
                />
                {error && <p className="error">{error}</p>}
                <div className="search-selectors">
                    <div className="select-box">
                        <label htmlFor="language">Language</label>
                        <Select
                            id="language"
                            placeholder={"All"}
                            defaultValue={language}
                            onChange={language => setLanguage(language.value)}
                            options={languageOptions}
                        />
                    </div>
                    <div className="select-box">
                        <label htmlFor="sort-by">Sort By</label>
                        <Select
                            id="sort-by"
                            placeholder={"Best Match (Default)"}
                            defaultValue={sortBy}
                            onChange={sortType => setSortBy(sortType.value)}
                            options={sortOptions}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SearchInput;