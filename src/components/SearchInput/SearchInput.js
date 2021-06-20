import React, {useState} from 'react';
import Select from 'react-select';
import { languageOptions, sortOptions } from './SearchInputUtils';
import { useDispatch } from 'react-redux';
import { retriveResults } from '../../redux/actions';
import getResults from '../../services/searchService';

function SearchInput() {
    const disptach = useDispatch();
    const [repoName, setRepoName] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [error, setError] = useState(null);
    const submitForm = async(event) => { 
        event.preventDefault();
        // removes space from the input field
        const name = repoName.replace(/\s/g , "");

        // checks to see if there's atleast 1 character in the input field
        if (name === "") {
            setError("Please enter a valid name!");
        } else {
            const results = await getResults(name, language, sortBy)
            disptach(retriveResults(results));
            setError(null);
        }
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input 
                    onChange={e => setRepoName(e.target.value)}
                    placeholder={"Enter Repo Name"}
                    type="text" 
                    required
                />
                {error && <p>{error}</p>}
                <div>
                    <div>
                        <label htmlFor="language">Language:</label>
                        <Select 
                            id="language"
                            placeholder={"All"}
                            defaultValue={language}
                            onChange={language => setLanguage(language.value)}
                            options={languageOptions}
                        />
                    </div>
                    <div>
                        <label htmlFor="sort-by">Sort By:</label>
                        <Select 
                            id="sort-by"
                            placeholder={"Best Match (Default)"}
                            defaultValue={sortBy}
                            onChange={sortType => setSortBy(sortType.value)}
                            options={sortOptions}
                            />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SearchInput;