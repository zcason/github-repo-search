import React, {useState} from 'react';
import Select from 'react-select';
import { languageOptions, sortOptions } from './SearchInputUtils';
import getSearchResults from '../../services/search-api-services';

function SearchInput(props) {
    const [repoName, setRepoName] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [searchResults, setSearchResults] = useState(null)

    const getResults = async(event) => { 
        event.preventDefault();

        try {
            const result = await getSearchResults(repoName,language,sortBy);
            console.log(result)

            setSearchResults(result);
        } catch (e) {
            alert(e);
        }
    };



    return (
        <div>
            <form onSubmit={getResults}>
                <input 
                    onChange={e => setRepoName(e.target.value)}
                    placeholder={"Enter Repo Name"}
                    type="text" 
                    required
                />
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